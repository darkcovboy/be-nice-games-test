using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace Game.Scripts.HexSystem
{
	public class HexCell : MonoBehaviour
	{
		[Header("Axial Coordinates (q, r)")]
		[SerializeField]
		private int _q;

		[SerializeField]
		private int _r;

		public Vector2Int AxialCoords => new Vector2Int(_q, _r);

		public Stack<HexPiece> HexPieces { get; set; } = new Stack<HexPiece>();


		public bool IsEmpty => HexPieces.Count == 0;

		private void Awake()
		{
			HexPiece[] children = GetComponentsInChildren<HexPiece>();
			HexPiece[] array = children;
			foreach (HexPiece piece in array)
			{
				if (!HexPieces.Contains(piece))
				{
					HexPieces.Push(piece);
				}
				piece.SetParentCell(this);
			}
			RearrangeStackPositions();
		}

		public void Add(HexPiece hexPiece)
		{
			HexPieces.Push(hexPiece);
			hexPiece.SetParentCell(this);
		}

		public void Pop()
		{
			if (!IsEmpty)
			{
				HexPieces.Pop();
			}
		}

		public HexPiece GetTop()
		{
			return (HexPieces.Count > 0) ? HexPieces.Peek() : null;
		}

		public Vector3 GetTopPositionWorld()
		{
			return base.transform.position + Vector3.up * ((float)HexPieces.Count * 0.2f) + new Vector3(0f, 0.2f, 0f);
		}

		private void RearrangeStackPositions()
		{
			HexPiece[] array = HexPieces.Reverse().ToArray();
			for (int i = 0; i < array.Length; i++)
			{
				array[i].transform.position = base.transform.position + Vector3.up * ((float)i * 0.2f) + new Vector3(0f, 0.2f, 0f);
			}
		}

		public void AddStack(HexPiece[] hexPieces)
		{
			foreach (HexPiece hexPiece in hexPieces)
			{
				if (!HexPieces.Contains(hexPiece))
				{
					HexPieces.Push(hexPiece);
				}
				hexPiece.SetParentCell(this);
			}
		}
	}
}
