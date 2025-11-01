using System.Collections;
using DG.Tweening;
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

        public Tween MoveTo(Vector3 target, float duration, float arcHeight = 1.25f)
        {
            Vector3 start = transform.position;
            Vector3 middle = (start + target) / 2f;
            middle.y += arcHeight;
            Vector3[] path = { start, middle, target };

            Vector3 dir = (target - start);
            dir.y = 0;
            dir.Normalize();

            float yAngle = GetHexFlipYAngle(dir);

            Quaternion baseRot = transform.rotation;
            Quaternion flipAxisRot = Quaternion.Euler(0f, yAngle, 0f);
            Vector3 localAxis = flipAxisRot * Vector3.right;

            Sequence seq = DOTween.Sequence();

            seq.Join(transform.DOPath(path, duration, PathType.CatmullRom)
                .SetEase(Ease.InOutQuad));

            seq.Join(DOVirtual.Float(0f, 180f, duration, angle =>
            {
                transform.rotation = baseRot * Quaternion.AngleAxis(angle, localAxis);
            }).SetEase(Ease.InOutSine));

            return seq;
        }
        
        private float GetHexFlipYAngle(Vector3 dir)
        {
            float angle = Mathf.Atan2(dir.x, dir.z) * Mathf.Rad2Deg;

            angle = Mathf.Repeat(angle + 180f, 360f) - 180f;

            return angle switch
            {
                > -30f and <= 30f => 0f,
                > 30f and <= 150f => 120f,
                _ => -120f
            };
        }
    }
}