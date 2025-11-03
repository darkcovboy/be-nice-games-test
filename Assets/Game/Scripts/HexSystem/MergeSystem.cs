using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using UnityEngine;

namespace Game.Scripts.HexSystem
{
    public class MergeSystem : MonoBehaviour
    {
        public event Action<HexCell> OnCollapse;
        public event Action OnAllMerged;
        
        [SerializeField] private HexGrid _grid;
        [SerializeField] private float _moveDuration = 0.3f;
        [SerializeField] private int _maxStack = 10;

        private bool _isMerging;
        private float _currentSpeedMultiplier = 1f;
        
        private readonly List<HexPiece> _buffer = new();

        public void StartMerge(HexCell startCell)
        {
            if (_isMerging) return;
            StartCoroutine(MergeRoutine(startCell));
        }

        private IEnumerator MergeRoutine(HexCell startCell)
        {
            _isMerging = true;

            yield return MergeFromCell(startCell);

            _isMerging = false;
            OnAllMerged?.Invoke();
        }
        
        private IEnumerator MergeFromCell(HexCell fromCell)
        {
            if (fromCell.IsEmpty)
                yield break;
            
            _buffer.Clear();
            foreach (var p in fromCell.HexPieces)
                _buffer.Add(p);

            
            HashSet<HexCell> affectedNeighbors = new HashSet<HexCell>();
            var neighbors = _grid.GetNeighbors(fromCell);
            
            const float delayStep = 0.05f;
            float currentDelay = 0f;
            HexColorType? lastColor = null;
            List<Tween> currentColorTweens = new();
            
            foreach (var piece in _buffer)
            {
                var color = piece.ColorType;
                
                if (lastColor.HasValue && lastColor.Value != color)
                {
                    foreach (var t in currentColorTweens)
                        yield return t.WaitForCompletion();

                    currentColorTweens.Clear();
                    currentDelay = 0f;
                    lastColor = color;
                    
                    yield return new WaitForSeconds(0.05f);
                }
                else if (!lastColor.HasValue)
                {
                    lastColor = color;
                }
                
                foreach (var neighbor in neighbors)
                {
                    if (neighbor.IsEmpty || neighbor.GetTop().ColorType != color) continue;

                    fromCell.Pop();

                    Vector3 target = neighbor.GetTopPositionWorld();
                    
                    float actualDuration = _moveDuration / _currentSpeedMultiplier;

                    neighbor.Add(piece);

                    Tween tween = piece.MoveTo(target, actualDuration)
                        .SetDelay(currentDelay);
                    
                    affectedNeighbors.Add(neighbor);
                    currentColorTweens.Add(tween);
                    currentDelay += delayStep;
                    break;
                }
            }
            
            foreach (var t in currentColorTweens)
                yield return t.WaitForCompletion();
            
            foreach (var neighbor in affectedNeighbors)
            {
                yield return StartCoroutine(TryCollapse(neighbor));
                yield return null;
                yield return StartCoroutine(MergeFromCell(neighbor));
            }
        }
        
        private IEnumerator TryCollapse(HexCell cell)
        {
            if (cell.HexPieces.Count == 0)
                yield break;

            var piecesArray = cell.HexPieces.ToArray();

            int count = piecesArray.Length;
            int seriesCount = 1;
            HexColorType currentColor = piecesArray[0].ColorType;

            for (int i = 1; i < count; i++)
            {
                if (piecesArray[i].ColorType == currentColor)
                {
                    seriesCount++;
                }
                else
                {
                    if (seriesCount >= _maxStack)
                    {
                        yield return DisappearPieces(cell, piecesArray, i - seriesCount, seriesCount);
                    }

                    currentColor = piecesArray[i].ColorType;
                    seriesCount = 1;
                }
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
            for (int i = startIndex; i < startIndex + length; i++)
                toRemove.Add(piecesArray[i]);
            
            List<Tween> tweens = new List<Tween>();


            for (int i = 0; i < toRemove.Count; i++)
            {
                var piece = toRemove[i];
                if (piece == null) continue;

                var tween = piece.Disappear(actualDuration)
                    .SetDelay(i * delayStep);
                tweens.Add(tween);
            }

            foreach (var t in tweens)
            {
                if (t.IsActive())
                    yield return t.WaitForCompletion();
            }
            
            foreach (var piece in toRemove)
            {
                if (piece != null)
                {
                    cell.HexPieces.Pop();
                    Destroy(piece.gameObject);
                }
            }

            OnCollapse?.Invoke(cell);

            yield return new WaitForSeconds(0.4f);
        }
    }
}