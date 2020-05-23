var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  bullet = createSprite(400, 200, 10, 30);
  bullet.shapeColor = color(255,255,255);
}


function draw() {
  background(0);  

if(HasCollided(bullet, wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/
        (thickness * thickness * thickness);

    if(damage > 10)
    {
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0, 255, 0);
    }
}
  drawSprites();
}
