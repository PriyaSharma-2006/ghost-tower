var tower,towerImage;
var ghost,ghostImage;
var climber,climberImage,door,doorImage;
var doorGroup;
var climberGroup;
var gameOver,gameOverImage;
function preload(){
 towerImage=loadImage("tower.png")
  ghostImage=loadImage("ghost-standing.png")
  climberImage=loadImage("climber.png")
  doorImage=loadImage("door.png")
  gameOverImage=loadImage("gameover.png")
}

function setup(){
  createCanvas(500,500);
  tower=createSprite(250,250,500,500)
  tower.addImage("tower",towerImage);
  tower.velocityY=8;
  
  ghost=createSprite(189,62,10,10)
  ghost.addImage("ghost",ghostImage);
  ghost.scale=0.2;
  
  doorGroup=new Group();
  climberGroup=new Group();
  
  gameover=createSprite(200,200,20,20)
  gameover.addImage("gameover",gameOverImage)
  gameover.visible=false;
}

function draw(){
 background("white");
  
 if(tower.y>400){
   tower.y=200
   
 } 
  
 if(keyDown("space")){
  ghost.velocityY=-3; 
      
 } 
   ghost.velocityY=ghost.velocityY+0.5;
  if(keyDown(RIGHT_ARROW)){
    ghost.x=ghost.x+3;
  } 
 
  if(keyDown(LEFT_ARROW)){
    ghost.x=ghost.x-3;
  } 
 
  obstacle();
  
  
  if(doorGroup.isTouching(ghost)){
    doorGroup.setVelocityYEach(0)
    climberGroup.setVelocityYEach(0)
    gameover.visible=true;
  }
    drawSprites();
}


function obstacle(){
  if(frameCount%200===0){
door=createSprite(250,0,10,10)  
  door.addImage("door",doorImage)
    door.velocityY=1;
    doorGroup.add(door);
        door.x=random(50,350)
  climber=createSprite(250,50,10,10)
  climber.addImage("climber",climberImage);
  climber.velocityY=1;
  climber.x=door.x;
    climberGroup.add(climber);
}
}





















