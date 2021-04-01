var box1,box2,box3;
var ground;
var paper;
var dustbinObj;
var paperObject;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new Dustbin(550, 620, 20, 100);
	box2=new Dustbin(635, 660, 150, 20);
	box3=new Dustbin(720, 620, 20, 100);

	ground=new Ground(400, 680, 800,20);

	paper=new Paper(100, 600, 10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:85, y: -85})
	}

  }



