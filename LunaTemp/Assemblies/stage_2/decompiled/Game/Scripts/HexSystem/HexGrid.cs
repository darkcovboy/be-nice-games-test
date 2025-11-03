using System.Collections.Generic;
using UnityEngine;

namespace Game.Scripts.HexSystem
{
	public class HexGrid : MonoBehaviour
	{
		[SerializeField]
		private List<HexCell> _cells = new List<HexCell>();

		private readonly Vector2Int[] _neighborOffsets = new Vector2Int[6]
		{
			new Vector2Int(1, 0),
			new Vector2Int(1, -1),
			new Vector2Int(0, -1),
			new Vector2Int(-1, 0),
			new Vector2Int(-1, 1),
			new Vector2Int(0, 1)
		};

		private readonly Dictionary<Vector2Int, HexCell> _map = new Dictionary<Vector2Int, HexCell>();

		private Dictionary<HexCell, HexCell[]> _neighbors;

		private void Awake()
		{
			_map.Clear();
			foreach (HexCell cell in _cells)
			{
				_map[cell.AxialCoords] = cell;
			}
			_neighbors = new Dictionary<HexCell, HexCell[]>(_cells.Count);
			CalculateNeighbors();
		}

		private void CalculateNeighbors()
		{
			foreach (HexCell cell in _cells)
			{
				List<HexCell> list = new List<HexCell>(6);
				Vector2Int[] neighborOffsets = _neighborOffsets;
				foreach (Vector2Int offset in neighborOffsets)
				{
					Vector2Int check = cell.AxialCoords + offset;
					if (_map.TryGetValue(check, out var neighbor))
					{
						list.Add(neighbor);
					}
				}
				_neighbors[cell] = list.ToArray();
			}
		}

		public HexCell[] GetNeighbors(HexCell cell)
		{
			return _neighbors[cell];
		}
	}
}
