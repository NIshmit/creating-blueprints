const Engine = Matter.Engine;
const World = Matter . World;
const Bodies = Matter . Bodies;

var engine , world;
var ground;


function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
   
    ground=new Ground(600,390,1200,20);
box1=new Box(600,200,50,50)
box2=new Box(640,100,50,100);
   
    
}

function draw(){
    background("skyblue");
   Engine.update(engine)

ground.display();
box1.display();
box2.display();

    
    
}