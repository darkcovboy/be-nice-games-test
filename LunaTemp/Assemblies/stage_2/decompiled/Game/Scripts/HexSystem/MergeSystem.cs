using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

namespace Game.Scripts.HexSystem
{
	public class MergeSystem : MonoBehaviour
	{
		[SerializeField]
		private HexGrid _grid;

		[SerializeField]
		private float _moveDuration = 0.3f;

		[SerializeField]
		private int _maxStack = 10;

		private bool _isMerging;

		private float _currentSpeedMultiplier = 1f;

		private readonly List<HexPiece> _buffer = new List<HexPiece>();

		public event Action<HexCell> OnCollapse;

		public event Action OnAllMerged;

		public void StartMerge(HexCell startCell)
		{
			if (!_isMerging)
			{
				StartCoroutine(MergeRoutine(startCell));
			}
		}

		private IEnumerator MergeRoutine(HexCell startCell)
		{
			_isMerging = true;
			yield return MergeFromCell(startCell);
			_isMerging = false;
			this.OnAllMerged?.Invoke();
		}

		private IEnumerator MergeFromCell(HexCell fromCell)
		{
			if (fromCell.IsEmpty)
			{
				yield break;
			}
			_buffer.Clear();
			foreach (HexPiece p in fromCell.HexPieces)
			{
				_buffer.Add(p);
			}
			HashSet<HexCell> affectedNeighbors = new HashSet<HexCell>();
			HexCell[] neighbors = _grid.GetNeighbors(fromCell);
			float currentDelay = 0f;
			HexColorType? lastColor = null;
			List<Tween> currentColorTweens = new List<Tween>();
			foreach (HexPiece piece in _buffer)
			{
				HexColorType color = piece.ColorType;
				if (lastColor.HasValue && lastColor.Value != color)
				{
					foreach (Tween t2 in currentColorTweens)
					{
						yield return t2.WaitForCompletion();
					}
					currentColorTweens.Clear();
					currentDelay = 0f;
					lastColor = color;
					yield return new WaitForSeconds(0.05f);
				}
				else if (!lastColor.HasValue)
				{
					lastColor = color;
				}
				HexCell[] array = neighbors;
				foreach (HexCell neighbor2 in array)
				{
					if (!neighbor2.IsEmpty && neighbor2.GetTop().ColorType == color)
					{
						fromCell.Pop();
						Vector3 target = neighbor2.GetTopPositionWorld();
						float actualDuration = _moveDuration / _currentSpeedMultiplier;
						neighbor2.Add(piece);
						Tween tween = piece.MoveTo(target, actualDuration).SetDelay(currentDelay);
						affectedNeighbors.Add(neighbor2);
						currentColorTweens.Add(tween);
						currentDelay += 0.05f;
						break;
					}
				}
			}
			foreach (Tween t in currentColorTweens)
			{
				yield return t.WaitForCompletion();
			}
			foreach (HexCell neighbor in affectedNeighbors)
			{
				yield return StartCoroutine(TryCollapse(neighbor));
				yield return null;
				yield return StartCoroutine(MergeFromCell(neighbor));
			}
		}

		private IEnumerator TryCollapse(HexCell cell)
		{
			if (cell.HexPieces.Count == 0)
			{
				yield break;
			}
			HexPiece[] piecesArray = cell.HexPieces.ToArray();
			int count = piecesArray.Length;
			int seriesCount = 1;
			HexColorType currentColor = piecesArray[0].ColorType;
			for (int i = 1; i < count; i++)
			{
				if (piecesArray[i].ColorType == currentColor)
				{
					seriesCount++;
					continue;
				}
				if (seriesCount >= _maxStack)
				{
					yield return DisappearPieces(cell, piecesArray, i - seriesCount, seriesCount);
				}
				currentColor = piecesArray[i].ColorType;
				seriesCount = 1;
			}
			_currentSpeedMultiplier *= 1.3f;
			if (seriesCount >= _maxStack)
			{
				yield return DisappearPieces(cell, piecesArray, count - seriesCount, seriesCount);
			}
		}

		private IEnumerator DisappearPieces(HexCell cell, HexPiece[] piecesArray, int startIndex, int length)
		{
			float baseDuration = 0.25f;
			float actualDuration = baseDuration / _currentSpeedMultiplier;
			float delayStep = 0.05f;
			List<HexPiece> toRemove = new List<HexPiece>();
			for (int j = startIndex; j < startIndex + length; j++)
			{
				toRemove.Add(piecesArray[j]);
			}
			List<Tween> tweens = new List<Tween>();
			for (int i = 0; i < toRemove.Count; i++)
			{
				HexPiece piece = toRemove[i];
				if (!(piece == null))
				{
					Tween tween = piece.Disappear(actualDuration).SetDelay((float)i * delayStep);
					tweens.Add(tween);
				}
			}
			foreach (Tween t in tweens)
			{
				if (t.IsActive())
				{
					yield return t.WaitForCompletion();
				}
			}
			foreach (HexPiece piece2 in toRemove)
			{
				if (piece2 != null)
				{
					cell.HexPieces.Pop();
					UnityEngine.Object.Destroy(piece2.gameObject);
				}
			}
			this.OnCollapse?.Invoke(cell);
			yield return new WaitForSeconds(0.4f);
		}
	}
}
