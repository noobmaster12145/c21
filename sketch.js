
var fixedRect, movingRect;
var gameObject1, gameObject2;
var car,wall

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  car = createSprite(200,200,30,30)
  car.shapeColor = "pink"
  car.velocityX = 4

  wall = createSprite(800,200,10,70)
  wall.shapeColor = "orange"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 /*if(isTouching(car,wall)){
wall.shapeColor = "red"


 }*/
 
 bounceOff(car,wall)

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

