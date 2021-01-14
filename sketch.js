var movingRect, fixedRect;

function setup() {

createCanvas(600,500);

fixedRect = createSprite(100,100,50,100);
fixedRect.shapeColor = "green";
fixedRect.debug = true;

movingRect = createSprite(200,100,100,50);
movingRect.shapeColor = "red";
movingRect.debug = true;

}

function draw() {

background(0);

movingRect.y = mouseY;
movingRect.x = mouseX;

//collision formula for 2 rectangles is movingRect.x - fixedRect.x
//movingRect.x - fixedRect.x = movingrect.width/2 + fixedRect.width/2
//movingRect.x - fixedRect.x = 100/2 + 50/2 = 75
//200 - 100 = 75 
//100 = 75

console.log(movingRect.x-fixedRect.x);

if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
  && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ) {

movingRect.shapeColor = "blue";
fixedRect.shapeColor = "blue";

}

else {
movingRect.shapeColor = "red";
fixedRect.shapeColor = "green";
}

drawSprites();

}