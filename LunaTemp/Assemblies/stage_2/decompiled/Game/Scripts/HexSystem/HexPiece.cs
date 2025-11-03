using DG.Tweening;
using UnityEngine;

namespace Game.Scripts.HexSystem
{
	public class HexPiece : MonoBehaviour
	{
		[SerializeField]
		private HexColorType _hexColorType;

		private Tween _activeTween;

		public HexColorType ColorType => _hexColorType;

		public HexCell CurrentCell { get; private set; }

		private void OnDestroy()
		{
			_activeTween?.Kill();
		}

		public void SetParentCell(HexCell cell)
		{
			CurrentCell = cell;
			base.transform.SetParent(cell.transform);
		}

		public Tween MoveTo(Vector3 target, float duration, float arcHeight = 1.25f)
		{
			_activeTween?.Kill();
			Vector3 start = base.transform.position;
			Vector3 middle = (start + target) / 2f;
			middle.y += arcHeight;
			Vector3[] path = new Vector3[3] { start, middle, target };
			Vector3 dir = target - start;
			dir.y = 0f;
			dir.Normalize();
			var (yAngle, flipAngle) = GetHexFlipAngles(dir);
			base.transform.rotation = Quaternion.Euler(0f, yAngle, 0f);
			Sequence seq = DOTween.Sequence();
			seq.Join(base.transform.DOPath(path, duration, PathType.CatmullRom).SetEase(Ease.InOutQuad));
			seq.Join(base.transform.DOLocalRotate(new Vector3(flipAngle, yAngle, 0f), duration).SetEase(Ease.InOutSine));
			_activeTween = seq;
			return seq;
		}

		public Tween Disappear(float duration)
		{
			_activeTween?.Kill();
			Sequence seq = DOTween.Sequence();
			seq.Join(base.transform.DOScale(Vector3.zero, duration).SetEase(Ease.InQuad));
			_activeTween = seq;
			return seq.OnComplete(delegate
			{
				_activeTween = null;
			});
		}

		private (float yAngle, float flipAngle) GetHexFlipAngles(Vector3 dir)
		{
			float angle = Mathf.Atan2(dir.x, dir.z) * 57.29578f;
			if (angle > -30f && angle <= 30f)
			{
				return (0f, 180f);
			}
			if (angle > 150f || angle <= -150f)
			{
				return (0f, -180f);
			}
			if (angle > 30f && angle <= 90f)
			{
				return (-120f, -180f);
			}
			if (angle > -150f && angle <= -90f)
			{
				return (-120f, 180f);
			}
			if (angle > 90f && angle <= 150f)
			{
				return (120f, 180f);
			}
			if (angle > -90f && angle <= -30f)
			{
				return (120f, -180f);
			}
			return (0f, 180f);
		}
	}
}
