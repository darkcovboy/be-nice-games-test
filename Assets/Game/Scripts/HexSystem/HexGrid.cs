using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace Game.Scripts.HexSystem
{
    public class HexGrid : MonoBehaviour
    {
        [SerializeField] private List<HexCell> _cells = new();

        private readonly Vector2Int[] _neighborOffsets =
        {
            new(1, 0), new(1, -1), new(0, -1),
            new(-1, 0), new(-1, 1), new(0, 1)
        };

        private Dictionary<Vector2Int, HexCell> _map = new();

        private void Awake()
        {
            _map.Clear();
            foreach (var cell in _cells)
                _map[cell.AxialCoords] = cell;
        }

        public List<HexCell> GetNeighbors(HexCell cell)
        {
            var result = new List<HexCell>();
            foreach (var offset in _neighborOffsets)
            {
                Vector2Int check = cell.AxialCoords + offset;
                if (_map.TryGetValue(check, out var neighbor))
                    result.Add(neighbor);
            }
            return result;
        }
    }
}