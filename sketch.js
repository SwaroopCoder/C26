
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var ball;
var connection
var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
  connection = Matter.Constraint.create({

  pointA:{x:200,y:20},
  pointB:{x:0,y:0},
  bodyB:ball,
  length:100,
  stiffness:0.1
  })
  World.add(world,connection)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  
  line(connection.pointA.x,connection.pointA.y,ball.position.x,ball.position.y)
  Engine.update(engine);

}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.});
}
  


