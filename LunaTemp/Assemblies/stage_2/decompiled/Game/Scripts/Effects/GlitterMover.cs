using Game.Scripts.HexSystem;
using UnityEngine;

namespace Game.Scripts.Effects
{
	public class GlitterMover : MonoBehaviour
	{
		[SerializeField]
		private MergeSystem _mergeSystem;

		[SerializeField]
		private ParticleSystem _particleSystem;

		private void Start()
		{
			_mergeSystem.OnCollapse += MoveGlitter;
		}

		private void OnDestroy()
		{
			_mergeSystem.OnCollapse -= MoveGlitter;
		}

		private void MoveGlitter(HexCell cell)
		{
			_particleSystem.transform.position = cell.transform.position;
			_particleSystem.Play();
		}
	}
}
