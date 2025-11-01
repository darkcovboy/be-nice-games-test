using DG.Tweening;
using Game.Scripts.HexSystem;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Game.Scripts.InputSystem
{
    public class HexStackDraggable : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
    {
        [SerializeField] private HexPiece[] _hexPieces;
        [SerializeField] private LayerMask _layerMask;
        [SerializeField] private Camera _camera;
        [SerializeField] private float _liftHeight = 0.3f;
        [SerializeField] private float _returnDuration = 0.25f;
        [SerializeField] private MergeSystem _mergeSystem;

        private Vector3 _startPosition;
        private bool _isDragging;
        private HexCell _currentCell;

        private bool _isConnected;

        private void Awake()
        {
            _startPosition = transform.position;
        }
        
        public void OnBeginDrag(PointerEventData eventData)
        {
            if(_isConnected)
                return;
            
            _isDragging = true;
            transform.DOKill();
            transform.DOMoveY(_liftHeight, 0.15f).SetRelative(true);

        }

        public void OnDrag(PointerEventData eventData)
        {
            if (!_isDragging) return;

            Ray ray = _camera.ScreenPointToRay(eventData.position);
            if (Physics.Raycast(ray, out var hit, 100f))
            {
                Vector3 pos = hit.point;
                pos.y = _startPosition.y + _liftHeight;
                transform.position = pos;
            }

        }

        public void OnEndDrag(PointerEventData eventData)
        {
            if(_isConnected)
                return;
            
            _isDragging = false;

            HexCell targetCell = TryGetCellUnderCursor(eventData);
            if (targetCell != null && targetCell.IsEmpty)
            {
                _isConnected = true;
                transform.DOMove(targetCell.transform.position, 0.25f)
                    .OnComplete(() =>
                    {
                        targetCell.AddStack(_hexPieces);
                        _mergeSystem.StartMerge(targetCell);
                    });
            }
            else
            {
                transform.DOMove(_startPosition, _returnDuration)
                    .SetEase(Ease.OutQuad);
            }

        }
        
        private HexCell TryGetCellUnderCursor(PointerEventData eventData)
        {
            Ray ray = _camera.ScreenPointToRay(eventData.position);
            if (Physics.Raycast(ray, out var hit, 100f, _layerMask))
            {
                Debug.Log($"Ray hit: {hit.collider.name}");
                return hit.collider.GetComponent<HexCell>();
            }

            Debug.Log("No hit");
            return null;
        }
    }
}