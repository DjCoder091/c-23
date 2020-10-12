const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,object

var box1,box2

var ground

function setup() {
  createCanvas(800,400);
engine=Engine.create()
  world=engine.world
box1=new Box(200,300,50,50)
box2=new Box(230,100,50,50)
  ground=new Ground(400,390,800,5)
}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
  box1.display()
  box2.display()
  ground.display()
}