var helicopterIMG,helicopterSprite,packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const world = Matter.World;
const Bodies = Matter.Bodies;
const Body  = Matter.Body;

function preload(){
	 helicopterIMG=loadImage("helicopter.png")
	 packageIMG=loadImage("package.png")
}

function setup(){
	createCanvas(800,700)
	rectMode(CENTER);


	packageSprite=createSprite(width/2,80,10,10)
	packageSprite=addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2,200,10,10)
	helicopterSprite=addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2,height-35,width,10)
	ground.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2,200,5,{restitution:0.4,isStatic:true})
	world.add(world,ground);


  //create a Ground
  ground=Bodies.rectangle(width/2,650,width,10,{isStatice:true})
  world.add(world,ground)


  Engine.run(engine)
}



function draw(){
	rectMode(CENTER)
	backGround(0);
	packageSprite.x=packageSprite.position.x
	packageSprite.y=packageSprite.position.y
    drawSprites()

}

function KeyPressed (){
    if(keyCode === LEFT_ARROW){
		helicopterSprite.x=helicopter.x-20;
		matter.Body.translate(packageBody,{x:-20,y:0})
	}

	
	if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(packageBody,false);


	}
}