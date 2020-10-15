var packageBody,ground
var bar1 ,bar2 ,bar3

var ball;

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

	engine = Engine.create();
	world = engine.world;

	var bar1_options = {
		isStatic:true,
		restitution:0.2
	}

	var bar2_options = {
		isStatic:true,
		restitution:0.2
	}

	var bar3_options = {
		isStatic:true,
		restitution:0.2
	}

	var ground_options = {
		isStatic:true,
		restitution:0.2
	}

	var ball_options = {
		isStatic:false 
	}

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.scale=2

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);

	bar1 = Bodies.rectangle(width/1.4, 650,200,20, bar1_options);
	World.add(world, bar1);


	bar2 = Bodies.rectangle(width/1.8, 600,200,20, bar2_options);
	World.add(world, bar2)

	bar3 = Bodies.rectangle(width/1.2,  600,200,20, bar3_options);
	World.add(world, bar3)

	
	
	ground = Bodies.rectangle(width/2,  690,200,20, ground_options);
	
//	ball = Bodies.circle(200,100,50, ball_options);
   // World.add(world, ball);

	
	Engine.run(engine);

	//ball = Bodies.circle(200,100,50, ball_options);
	ball = new Ball();
    World.add(world, ball);
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");

  ball.display();

  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y

  rect(bar1.position.x,bar1.position.y,230,20);

  rect(bar2.position.x,bar2.position.y,20,120);

  rect(bar3.position.x,bar3.position.y,20,120);

  fill("yellow")

  rect(ground.position.x,ground.position.y,800,20);
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyforce(packageSprite.body,packageSprite.body,position,{x: 85,y: -85 })
	}
}




