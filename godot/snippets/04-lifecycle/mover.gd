extends Node2D

#region process
@export var speed := 200.0

func _process(delta: float) -> void:
	position.x += speed * delta
#endregion
