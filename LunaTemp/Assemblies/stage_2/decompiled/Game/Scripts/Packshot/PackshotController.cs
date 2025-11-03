using DG.Tweening;
using Game.Scripts.HexSystem;
using UnityEngine;
using UnityEngine.UI;

namespace Game.Scripts.Packshot
{
	public class PackshotController : MonoBehaviour
	{
		[SerializeField]
		private CanvasGroup _canvasGroup;

		[SerializeField]
		private Button _button;

		[SerializeField]
		private MergeSystem _mergeSystem;

		[SerializeField]
		private float _fadeDuration = 0.7f;

		[SerializeField]
		private string _storeUrl = "";

		private void Awake()
		{
			_mergeSystem.OnAllMerged += Show;
			_canvasGroup.alpha = 0f;
			_canvasGroup.gameObject.SetActive(false);
			_button.onClick.AddListener(OnPlayClicked);
		}

		private void OnDestroy()
		{
			_mergeSystem.OnAllMerged -= Show;
		}

		private void Show()
		{
			_canvasGroup.gameObject.SetActive(true);
			_canvasGroup.DOFade(1f, _fadeDuration);
		}

		private void OnPlayClicked()
		{
			Application.OpenURL(_storeUrl);
		}
	}
}
