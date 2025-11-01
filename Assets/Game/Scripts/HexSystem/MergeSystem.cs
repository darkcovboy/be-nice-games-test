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


            foreach (var piece in _buffer)
            {
                var color = piece.ColorType;

                foreach (var neighbor in neighbors)
                {
                    if (neighbor.IsFull)
                        continue;

                    if (neighbor.IsEmpty || neighbor.GetTop().ColorType != color) continue;
                    
                    fromCell.Pop();
                        
                    Vector3 target = neighbor.GetTopPositionWorld();

                    yield return piece.MoveTo(target, _moveDuration).WaitForCompletion();

                    neighbor.Add(piece);

                    TryCollapse(neighbor);
                    affectedNeighbors.Add(neighbor);

                    break;
                }
            }

            foreach (var neighbor in affectedNeighbors)
            {
                yield return MergeFromCell(neighbor);
            }
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

            while (cell.HexPieces.Count > 0)
            {
                var piece = cell.Pop();
                Destroy(piece.gameObject);
            }
        }
    }
}