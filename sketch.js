
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new bob(200,700);
	bob2 = new bob(280,700);
	bob3 = new bob(360,700);
	bob4 = new bob(430,700);
	bob5 = new bob(500,700);

	roof1 = new roof(400,200);

	rope1 = new rope(bob1.body,roof1.body,10,0);
	rope2 = new rope(bob2.body,roof1.body,40,0);
	rope3 = new rope(bob3.body,roof1.body,80,0);
	rope4 = new rope(bob4.body,roof1.body,120,0);
	rope5 = new rope(bob5.body,roof1.body,160,0);


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("green");
  Engine.update(engine);


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:50,y:-50});
	}
}



