using System.Collections;
using DG.Tweening;
using Game.Scripts.HexSystem;
using UnityEngine;
using UnityEngine.UI;

namespace Game.Scripts.Effects
{
    public class HexDisappear : MonoBehaviour
    {
        [SerializeField] private MergeSystem _mergeSystem;
        [SerializeField] private Image[] _hexes;
        [SerializeField] private Color[] _colors;
        
        [SerializeField] private float _maxScale;
        [SerializeField] private float _delayBetweenHexes = 0.07f;
        [SerializeField] private float _pulseDuration = 0.25f;

        private void Start()
        {
            foreach (var hex in _hexes)
            {
                hex.gameObject.SetActive(false);
                hex.color = Color.clear;
                hex.transform.localScale = Vector3.zero;
            }

            _mergeSystem.OnCollapse += MoveHexesAndPlay;
        }

        private void OnDestroy()
        {
            if (_mergeSystem != null)
                _mergeSystem.OnCollapse -= MoveHexesAndPlay;
        }

        private void MoveHexesAndPlay(HexCell cell)
        {
            transform.SetParent(cell.transform);
            transform.localPosition = new Vector3(0, 0.1f, 0);
            
            var color = _colors[Random.Range(0, _colors.Length)];
            StartCoroutine(AnimateHexes(color));

        }
        
        private IEnumerator AnimateHexes(Color color)
        {
            foreach (var hex in _hexes)
            {
                hex.gameObject.SetActive(true);
                hex.color = color;

                hex.transform.DOScale(_maxScale, _pulseDuration)
                    .SetEase(Ease.InOutQuad)
                    .OnComplete(() =>
                    {
                        hex.DOFade(0f, _pulseDuration)
                            .OnComplete(() =>
                            {
                                hex.gameObject.SetActive(false);
                                hex.transform.localScale = Vector3.zero;
                            });
                    });

                yield return new WaitForSeconds(_delayBetweenHexes);
            }
        }

    }
}