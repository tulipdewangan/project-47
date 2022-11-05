const PLAY = 1;
var baby;
var milkGroup;
var happy;
var gameState = PLAY;

const END = 0;



function preload(){
  babyImage = loadImage('baby.png');
  milkImage = loadImage('milk.png');
  happysound = loadSound('happy.wav');

}
function setup(){
 canvas = createCanvas (1000,1000);

baby = createSprite(500,750,20,20);
baby.addImage(babyImage);
baby.scale=0.3;

milkGroup = new Group();

baby.debug= true;



}



function draw(){
background("yellow");


if(keyDown(LEFT_ARROW)){
  baby.position.x = baby.position.x-5;
}

if(keyDown(RIGHT_ARROW)){
  baby.position.x = baby.position.x+5;
}

if(keyDown(UP_ARROW)){
  baby.position.y = baby.position.y-5;
}

if(keyDown(DOWN_ARROW)){
  baby.position.y = baby.position.y+5;
}

if(milkGroup.isTouching(baby)){
  milkGroup.destroyEach();
  console.log("happy baby");
  happysound.play();
}





spawnmilk()
drawSprites()
}
function spawnmilk(){
  if(frameCount % 100 === 0){
    a = Math.round(random(50,950))
    b = Math.round(random(50,950))
    milk = createSprite(a,b,50,50)
    milk.addImage(milkImage)
    milk.scale=0.1;
    milk.lifetime = 150;

    milkGroup.add(milk);
    milk.debug = true;
  }

}

