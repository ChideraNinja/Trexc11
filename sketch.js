var ground,groundImage
var trex ,trex_running;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,20)
trex.addAnimation("trexlabel",trex_running)
trex.scale=0.5
ground=createSprite(300,180,600,10)
ground.addImage("groundlabel",groundImage)
}

function draw(){
  background("black")
  if(keyDown("space")){
    trex.velocityY=-12
  }
  trex.velocityY=trex.velocityY+1 
  trex.collide(ground)
  drawSprites()

}
