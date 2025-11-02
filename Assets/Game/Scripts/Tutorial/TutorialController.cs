using DG.Tweening;
using UnityEngine;

namespace Game.Scripts.Tutorial
{
    public class TutorialController : MonoBehaviour
    {
        [SerializeField] private CanvasGroup _overlayGroup;
        [SerializeField] private RectTransform _holeMask;
        [SerializeField] private RectTransform _handPointer;
        [SerializeField] private Camera _mainCamera;

        [SerializeField] private Transform _stackTransform;
        [SerializeField] private Transform _targetCellTransform;

        [SerializeField] private float _fadeDuration = 0.5f;
        [SerializeField] private float _moveDuration = 1f;

        private bool _clickedOnce = false;

        private void Start()
        {
            if (_mainCamera == null)
                _mainCamera = Camera.main;

            StartTutorial();
        }

        private void StartTutorial()
        {
            _overlayGroup.alpha = 0;
            _overlayGroup.gameObject.SetActive(true);
            _overlayGroup.DOFade(1, _fadeDuration);

            MoveMaskTo(_stackTransform.position);

            MoveHandTo(_stackTransform.position);
        }

        private void MoveMaskTo(Vector3 worldPos)
        {
            Vector3 screenPos = _mainCamera.WorldToScreenPoint(worldPos);
            _holeMask.position = screenPos;
        }

        private void MoveHandTo(Vector3 worldPos)
        {
            Vector3 screenPos = _mainCamera.WorldToScreenPoint(worldPos);
            _handPointer.position = screenPos + new Vector3(0, -100f, 0);

            _handPointer
                .DOAnchorPosY(_handPointer.anchoredPosition.y + 40f, 0.7f)
                .SetLoops(-1, LoopType.Yoyo)
                .SetEase(Ease.InOutSine);
        }

        public void OnPlayerClickedStack()
        {
            if (_clickedOnce) return;

            _clickedOnce = true;

            DOTween.Kill(_handPointer);
            MoveMaskTo(_targetCellTransform.position);
            _handPointer
                .DOMove(_mainCamera.WorldToScreenPoint(_targetCellTransform.position), _moveDuration)
                .SetEase(Ease.InOutSine);
        }

        public void EndTutorial()
        {
            _overlayGroup.DOFade(0, 0.5f)
                .OnComplete(() => _overlayGroup.gameObject.SetActive(false));
        }
    }
}