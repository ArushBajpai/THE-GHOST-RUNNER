var tower , towerImg
var door , doorImg , doorGroup
var railing , railingImg , railingGroup
 var ghost , ghostImg 
 var bone , boneImg , boneGroup
 var rigidRailing , rigidRailingImg
 var block , blockGroup
 var START =1
 var PLAY = 1
 var END = 0
 var gameState = START



function preload (){
  towerImg = loadImage("tower.png")
  doorImg = loadImage("door.png")
  railingImg = loadImage("climber.png")
  ghostImg = loadImage("ghost.png")
boneImg = loadImage("bones.png")
  rigidRailingImg = loadImage("climber.png")
  
  
}

function setup (){
  createCanvas(600,600)
  
  tower = createSprite(300,300)
  tower.addImage(towerImg)
  tower.velocityY = 3
  
  ghost = createSprite(300,450)
  ghost.addImage(ghostImg)
  ghost.scale = 0.3
  
 
  
  doorGroup = new Group ()
  railingGroup = new Group()
  blockGroup = new Group()
}

function draw (){
 
  console.log(tower.y)
  
  if (gameState === PLAY){
    
  if (ghost.isTouching(blockGroup)||ghost.y>600){
    gameState = END
  }
    if(ghost.isTouching(railingGroup))
      {
        ghost.velocityY = 0
      }
   
     
       if(keyDown("left_arrow")){
      ghost.x = ghost.x - 6;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 6;
    }
    
    if(keyDown("space")){
      ghost.velocityY = -13  
    
    }
      ghost.velocityY = ghost.velocityY + 0.8
    
     
  if(tower.y>400){
    tower.y = 300
  }
  
   
  spawnDoors()
    
      
    }
  
  if (gameState === END){
    doorGroup.destroyEach();
    railingGroup.destroyEach();
    blockGroup.destroyEach();
    ghost.destroy();
    tower.destroy();
    background("black")
    fill('yellow')
    textSize(30)
    text('GameOver',200,200)
    text("press the CTRL+R to restart  ",200,300)
    
    
    
  }
  
    
  
  
  drawSprites()
}

function spawnDoors(){
 if (frameCount % 240  === 0){
   door = createSprite(200,-50)
   door.addImage(doorImg)
   door.x = Math.round(random(120,400))
   door.velocityY = 1
 
   door.lifetime = 800
   ghost.depth = door.depth
   ghost.depth= ghost.depth+1
   doorGroup.add(door)
   
   railing = createSprite(200,10)
   railing.addImage(railingImg)
   railing.x = door.x
   railing.velocityY = 1
   railing.lifetime = 800
   railingGroup.add(railing)
   
  
   
   
    block = createSprite(200,15);
    
    block.x = door.x;
    block.width= railing.width
   block.height = 2
  
   block.debug = true
   block.velocityY = 1;
   block.lifetime = 800
   blockGroup.add(block)
   
   
 }
}


