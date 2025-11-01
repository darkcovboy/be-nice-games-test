using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
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
            
            Debug.Log($"Merging from cell {fromCell}");

            var pieces = fromCell.HexPieces.ToArray();
            var affectedNeighbors = new HashSet<HexCell>(); // соседи, в которые что-то перелетело


            foreach (var piece in pieces)
            {
                var color = piece.ColorType;
                var neighbors = _grid.GetNeighbors(fromCell);

                bool moved = false;

                foreach (var neighbor in neighbors)
                {
                    if (neighbor.IsFull)
                        continue;

                    if (!neighbor.IsEmpty && neighbor.GetTop().ColorType == color)
                    {
                        fromCell.Pop();
                        
                        Vector3 target = neighbor.GetTopPositionWorld();

                        yield return piece.MoveTo(target, _moveDuration);

                        neighbor.Add(piece);

                        TryCollapse(neighbor);
                        affectedNeighbors.Add(neighbor);

                        break;
                    }
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

            var piecesArray = cell.HexPieces.ToArray();
            var firstColor = piecesArray[0].ColorType;
            bool allSame = piecesArray.All(p => p.ColorType == firstColor);

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