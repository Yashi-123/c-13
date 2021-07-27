var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  appleImage = loadImage("apple.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples()

  drawSprites();
}

function createApples(){

  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImage);
  apple.scale=0.5;
  apple.velocity=-3;
 
  
}

var apple = Math.round(random(1,2));

if (frameCount % 80 === 0){
  if (apple === 1){
    createApples()
  }
}











