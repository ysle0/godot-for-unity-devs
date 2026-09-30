using Godot;

namespace Snippets.M04;

public partial class Mover : Node2D
{
    #region process
    [Export] public float Speed { get; set; } = 200f;

    public override void _Process(double delta)
    {
        Position += new Vector2(Speed * (float)delta, 0f);
    }
    #endregion
}
