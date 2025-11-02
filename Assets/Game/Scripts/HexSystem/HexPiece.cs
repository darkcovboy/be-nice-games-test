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

            var (yAngle, flipAngle) = GetHexFlipAngles(dir);
            transform.rotation = Quaternion.Euler(0f, yAngle, 0f);

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

        private (float yAngle, float flipAngle) GetHexFlipAngles(Vector3 dir)
        {
            float angle = Mathf.Atan2(dir.x, dir.z) * Mathf.Rad2Deg;

            if (angle > -30f && angle <= 30f)
                return (0f, 180f); // вверх
            if (angle > 150f || angle <= -150f)
                return (0f, -180f); // вниз

            if (angle > 30f && angle <= 90f)
                return (-120f, -180f); // левый верхний
            if (angle > -150f && angle <= -90f)
                return (-120f, 180f);  // правый нижний

            if (angle > 90f && angle <= 150f)
                return (120f, 180f); // левый нижний
            if (angle > -90f && angle <= -30f)
                return (120f, -180f); // правый верхний

            return (0f, 180f);
        }

    }
}