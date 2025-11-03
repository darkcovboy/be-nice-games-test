using DG.Tweening;
using Game.Scripts.HexSystem;
using Game.Scripts.Tutorial;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Game.Scripts.InputSystem
{
	public class HexStackDraggable : MonoBehaviour, IBeginDragHandler, IEventSystemHandler, IDragHandler, IEndDragHandler
	{
		[SerializeField]
		private TutorialController _tutorialController;

		[SerializeField]
		private HexPiece[] _hexPieces;

		[SerializeField]
		private LayerMask _layerMask;

		[SerializeField]
		private Camera _camera;

		[SerializeField]
		private float _liftHeight = 0.3f;

		[SerializeField]
		private float _returnDuration = 0.25f;

		[SerializeField]
		private MergeSystem _mergeSystem;

		private Vector3 _startPosition;

		private bool _isDragging;

		private HexCell _currentCell;

		private bool _isConnected;

		private void Awake()
		{
			_startPosition = base.transform.position;
		}

		public void OnBeginDrag(PointerEventData eventData)
		{
			if (!_isConnected)
			{
				_isDragging = true;
				base.transform.DOKill();
				base.transform.DOMoveY(_liftHeight, 0.15f).SetRelative(true);
				_tutorialController.OnPlayerClickedStack();
			}
		}

		public void OnDrag(PointerEventData eventData)
		{
			if (_isDragging)
			{
				Ray ray = _camera.ScreenPointToRay(eventData.position);
				if (Physics.Raycast(ray, out var hit, 100f))
				{
					Vector3 pos = hit.point;
					pos.y = _startPosition.y + _liftHeight;
					base.transform.position = pos;
				}
			}
		}

		public void OnEndDrag(PointerEventData eventData)
		{
			if (_isConnected)
			{
				return;
			}
			_isDragging = false;
			HexCell targetCell = TryGetCellUnderCursor(eventData);
			if (targetCell != null && targetCell.IsEmpty)
			{
				_isConnected = true;
				base.transform.DOMove(targetCell.transform.position, 0.25f).OnComplete(delegate
				{
					_tutorialController.EndTutorial();
					targetCell.AddStack(_hexPieces);
					_mergeSystem.StartMerge(targetCell);
				});
			}
			else
			{
				base.transform.DOMove(_startPosition, _returnDuration).SetEase(Ease.OutQuad);
			}
		}

		private HexCell TryGetCellUnderCursor(PointerEventData eventData)
		{
			Ray ray = _camera.ScreenPointToRay(eventData.position);
			RaycastHit hit;
			return Physics.Raycast(ray, out hit, 100f, _layerMask) ? hit.collider.GetComponent<HexCell>() : null;
		}
	}
}
