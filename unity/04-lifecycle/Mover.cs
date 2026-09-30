using UnityEngine;

public class Mover : MonoBehaviour
{
    #region update
    [SerializeField] private float speed = 200f;

    private void Update()
    {
        transform.position += Vector3.right * speed * Time.deltaTime;
    }
    #endregion
}
