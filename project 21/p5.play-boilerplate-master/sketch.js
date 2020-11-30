var bullet, wall, speed, weight,thickness;

function setup(){
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,50);
  //car sprite
  bullet=createSprite(50,200,50,20);
  bullet.velocityX=speed;
 
  //wall sprite
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}
function draw(){
  background(0);

//console.log(weight);

if (hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damage>10){
  wall.shapeColor=color(255,0,0);
}
if(damage<10){
wall.shapeColor=color(0,255,0);
}


}
  drawSprites();
}

function hasCollided(b1,w1){
   bulletright=b1.x+b1.width;
  if (bulletright>=w1.x){
    return true;
  }
  return false;

}
