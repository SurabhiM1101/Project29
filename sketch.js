
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  mango1=new mango(1100,100,30);
  mango2=new mango(1100,250,30);
  mango3=new mango(1000,100,30);
  mango4=new mango(1200,170,30);
  mango5=new mango(1000,200,30);
	stone1=new stone(350,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	chain=new Chain(stone1.body,{x:250,y:400});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
 
  stone1.display();
  chain.display();

  groundObject.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function detectCollision(stone,mango){
  MangoBodyPosition=mango.body.setPosition
  StoneBodyPosition=stone.body.setPosition

  var distance=dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
if(distance<=mango.r+stone.r){
  Matter.Body.setStatic(mango.body,false);
}
}
