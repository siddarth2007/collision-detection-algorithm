var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 90);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  fixedRect = createSprite(400, 200, 50, 90);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

}

function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    &&  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  drawSprites();
}