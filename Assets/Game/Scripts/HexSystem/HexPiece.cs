using System.Collections;
using UnityEngine;

namespace Game.Scripts.HexSystem
{
    public class HexPiece : MonoBehaviour
    {
        [SerializeField] private HexColorType _hexColorType;
        public HexColorType ColorType => _hexColorType;
        public HexCell CurrentCell { get; private set; }

        public void SetParentCell(HexCell cell)
        {
            CurrentCell = cell;
            transform.SetParent(cell.transform);
        }

        public IEnumerator MoveTo(Vector3 target, float duration)
        {
            Vector3 start = transform.position;
            float t = 0f;
            while (t < 1f)
            {
                t += Time.deltaTime / duration;
                transform.position = Vector3.Lerp(start, target, t);
                yield return null;
            }
            transform.position = target;
        }

    }
}