var bullet, wall, thickness;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,10,200); 
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83);
  car.velocityX=speed;
  console.log(car.velocityX);
  
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/thickness*thickness*thickness;
    if(damage>10){
      bullet.shapeColor=color("red");
    }
    
    if(damage>100){
      bullet.shapeColor=color("green");
    }
  }
  

  drawSprites();
}
function hasCollided(Lbullet,Lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEde>=wallLeftEdge){
  return true;
}
return false;



}