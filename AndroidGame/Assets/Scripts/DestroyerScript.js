#pragma strict

var player : Transform;

function OnTriggerEnter2D(other: Collider2D) {
	if(!other.tag.Equals("Player")){
		//if(other.gameObject.transform.parent){
		//	Destroy(other.gameObject.transform.parent.gameObject);
		//}
		//else {
			Destroy(other.gameObject);
		//}
	}
}

function Update(){
	transform.position = new Vector3(player.position.x - 10, 0, 0);
}
