using Game.Scripts.HexSystem;
using UnityEngine;

namespace Game.Scripts
{
    public class TestHexScene : MonoBehaviour
    {
        [SerializeField] private HexCell _cell;

        private void Update()
        {
            // щёлк мышкой → запускаем цепную реакцию
            if (Input.GetMouseButtonDown(0))
            {
                Debug.Log("Запуск реакции...");
            }
        }
    }
}