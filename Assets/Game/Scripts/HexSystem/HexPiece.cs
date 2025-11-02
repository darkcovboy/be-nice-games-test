using System;
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
        
        private Tween _activeTween;

        private void OnDestroy()
        {
            _activeTween?.Kill();
        }

        public void SetParentCell(HexCell cell)
        {
            CurrentCell = cell;
            transform.SetParent(cell.transform);
        }

        public Tween MoveTo(Vector3 target, float duration, float arcHeight = 1.25f)
        {
            _activeTween?.Kill();

            Vector3 start = transform.position;
            Vector3 middle = (start + target) / 2f;
            middle.y += arcHeight;
            Vector3[] path = { start, middle, target };

            Vector3 dir = (target - start);
            dir.y = 0f;
            dir.Normalize();

            float yAngle = GetHexFlipYAngle(dir);
            transform.rotation = Quaternion.Euler(0f, yAngle, 0f);

            float flipAngle = dir.z >= 0f ? -180f : 180f;
            if (yAngle == 0f)
                flipAngle *= -1;

            Sequence seq = DOTween.Sequence();

            seq.Join(transform.DOPath(path, duration, PathType.CatmullRom)
                .SetEase(Ease.InOutQuad));

            seq.Join(transform.DOLocalRotate(
                    new Vector3(flipAngle, yAngle, 0f), 
                    duration)
                .SetEase(Ease.InOutSine)
            );

            _activeTween = seq;
            return seq;

        }

        public Tween Disappear(float duration)
        {
            _activeTween?.Kill();
            var seq = DOTween.Sequence();
            seq.Join(transform.DOScale(Vector3.zero, duration).SetEase(Ease.InQuad));
            _activeTween = seq;
            return seq.OnComplete(() =>
            {
                _activeTween = null;
                Destroy(gameObject);
            });
        }

        private float GetHexFlipYAngle(Vector3 dir)
        {
            float angle = Mathf.Atan2(dir.x, dir.z) * Mathf.Rad2Deg;

            angle = Mathf.Repeat(angle + 180f, 360f) - 180f;

            return angle switch
            {
                > -30f and <= 30f => 0f,
                > 30f and <= 150f => -120f,
                _ => 120f
            };
        }
    }
}