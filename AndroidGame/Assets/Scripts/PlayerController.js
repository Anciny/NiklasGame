#pragma strict


@script RequireComponent(Rigidbody2D)

private var character : Rigidbody2D;
private var jump : boolean = false;
private var isGrounded : boolean = false;

function Start () {
	character = GetComponent(Rigidbody2D);
	character.AddTorque(-360);
	character.velocity = new Vector2(10, 0);
}

function Update () {
	if(isGrounded && Input.GetKey("space")){
		jump = true;
		isGrounded = false;
	}
}

function FixedUpdate() {
	if(jump){
        character.velocity.y = 8;
	}
	jump = false;
}

function OnCollisionEnter2D(other : Collision2D){
    if(other.gameObject.tag.Equals("Ground")){
        isGrounded = true;		
    }
}