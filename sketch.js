var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  background="black";
  car=createSprite(50,200,50,50);
  car.shapeColor="white";
  wall=createSprite(1500,200,60,400);
  wall.shapeColor="blue";
  speed=random(0,180);
  weight=random(400,1500);
  car.velocityX=speed;
}
function draw() {
   var background=background(0,0,0);

  isTouching();
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation>180&&deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function isTouching()
{
  if (car.x-wall.x<wall.width/2+car.width/2
    && wall.x-car.x<car.width/2+wall.width/2
    && car.y-wall.y<wall.height/2+car.height/2
    && wall.y-car.y<car.height/2+wall.height/2){

    }
  } 