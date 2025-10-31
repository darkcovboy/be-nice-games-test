using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace Game.Scripts.HexSystem
{
    public class HexCell : MonoBehaviour
    {
        [Header("Axial Coordinates (q, r)")]
        [SerializeField] private int _q;
        [SerializeField] private int _r;

        public Vector2Int AxialCoords => new(_q, _r);
        private const int MaxPieces = 10;
        public Stack<HexPiece> HexPieces { get; set; } = new();

        private void Awake()
        {
            var children = GetComponentsInChildren<HexPiece>();
            foreach (var piece in children)
            {
                if (!HexPieces.Contains(piece))
                    HexPieces.Push(piece);
                piece.SetParentCell(this);
            }

            RearrangeStackPositions();
        }

        public void Add(HexPiece hexPiece)
        {
            HexPieces.Push(hexPiece);
            hexPiece.SetParentCell(this);
        }

        
        public HexPiece Pop()
        {
            if (IsEmpty)
                return null;

            return HexPieces.Pop();
        }


        public bool TryGetPosition(ref Vector3 position)
        {
            if (IsFull)
                return false;

            position = GetTopPositionWorld();
            return true;
        }
        
        public Vector3 GetTopPositionWorld()
        {
            return transform.position + Vector3.up * (HexPieces.Count * 0.2f) + new Vector3(0f,0.2f,0f);
        }

        public bool IsFull => HexPieces.Count >= MaxPieces;

        public bool IsEmpty => HexPieces.Count == 0;

        private void RearrangeStackPositions()
        {
            var array = HexPieces.Reverse().ToArray();
            for (int i = 0; i < array.Length; i++)
            {
                array[i].transform.position = transform.position + Vector3.up * (i * 0.2f) + new Vector3(0f,0.2f,0f);
            }
        }
    }
}