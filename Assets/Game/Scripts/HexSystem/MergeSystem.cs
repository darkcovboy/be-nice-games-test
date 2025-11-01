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
        [SerializeField] private HexGrid _grid;
        [SerializeField] private float _moveDuration = 0.3f;
        [SerializeField] private float _pieceHeight = 0.1f;
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

            if (startCell == null || startCell.IsEmpty)
            {
                _isMerging = false;
                yield break;
            }

            yield return MergeFromCell(startCell);

            _isMerging = false;
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
                
                for (var i = 0; i < neighbors.Length; i++)
                {
                    var neighbor = neighbors[i];
                    if (neighbor.IsFull)
                        continue;

                    if (neighbor.IsEmpty || neighbor.GetTop().ColorType != color) continue;

                    fromCell.Pop();

                    Vector3 target = neighbor.GetTopPositionWorld();
                    
                    float actualDuration = _moveDuration / _currentSpeedMultiplier;

                    Tween tween = piece.MoveTo(target, actualDuration)
                        .SetDelay(currentDelay)
                        .OnComplete(() =>
                        {
                            TryCollapse(neighbor);
                            affectedNeighbors.Add(neighbor);
                        });
                    
                    neighbor.Add(piece);
                    currentColorTweens.Add(tween);
                    currentDelay += delayStep;
                    break;
                }
            }
            
            foreach (var t in currentColorTweens)
                yield return t.WaitForCompletion();
            
            foreach (var neighbor in affectedNeighbors)
            {
                yield return MergeFromCell(neighbor);
            }
            
            _currentSpeedMultiplier *= 1.3f;
        }
        
        private void TryCollapse(HexCell cell)
        {
            if (cell.HexPieces.Count < _maxStack)
                return;

            var pieces = cell.HexPieces.ToArray();
            var firstColor = pieces[0].ColorType;
            bool allSame = true;

            for (int i = 1; i < pieces.Length; i++)
            {
                if (pieces[i].ColorType != firstColor)
                {
                    allSame = false;
                    break;
                }
            }

            if (!allSame)
                return;

            StartCoroutine(DisappearPieces(cell, pieces));
        }

        private IEnumerator DisappearPieces(HexCell cell, HexPiece[] pieces)
        {
            cell.HexPieces.Clear();

            float baseDuration = 0.25f;
            float actualDuration = baseDuration / _currentSpeedMultiplier;
            float delayStep = 0.05f;

            for (int i = 0; i < pieces.Length; i++)
            {
                var piece = pieces[i];

                piece.Disappear(actualDuration)
                    .SetDelay(i * delayStep);
            }
            
            yield return new WaitForSeconds(actualDuration  + pieces.Length * delayStep);
        }
    }
}