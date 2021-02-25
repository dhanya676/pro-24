
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
hammer =  new hammer()
stone  = new stone ()
rubber = new stone ()
sand 1 = new sand ()
sand 2 = new sand ()
sand 3 = new sand ()
sand 4 = new sand ()
sand 5 = new sand ()
sand 6 = new sand ()
sand 7 = new sand ()
sand 8 = new sand ()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



