const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1Object, dustbin2Object, dustbin3Object;
var world, body;
var paperObject; 
var groundObject;

function preload()
{

}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject = new Paper(200,450,70);

	//dustbin1Object = new Dustbin(1200, 510, 20, 200);
	dustbin2Object = new Dustbin(1000, 510, 20, 200);
	//dustbin3Object = new Dustbin(1100, 600, 200, 20);
	
	groundObject = new Ground(width/2, 620, width, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightgrey');

  paperObject.display();
  groundObject.display();
  //dustbin1Object.display();
  dustbin2Object.display();
  //dustbin3Object.display();
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y:-85});
	}
}

