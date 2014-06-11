#pragma strict

var player : Transform;

function Update () {
	transform.position = new Vector3(player.position.x + 7, 0, 0);
}