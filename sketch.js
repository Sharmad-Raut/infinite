var spaceImg, space1;
var planImg, plan, plansGroup;
var red, redImg;
var shipGroup, ship;
    spaceImg = loadImage("space.png");
    planImg = loadImage("plan.png");
    redImg = loadImage("RedShip.png");


function setup() {
  createCanvas(600, 600);
  space1 = createSprite(300,300);
  space1.addImage("space",spaceImg);
  space1.velocityY = 1;

  red=createSprite(200,200,50,50)
  red.addImage("RedShip",redImg)
  red.scale=0.5
  
  plansGroup=new Group()
  shipGroup=new Group()
}

function draw() {
  background(0);
  drawSprites()
  
  
    
    if(gameState==="play"){
      if(space1.y > 400){
        space1.y = 300
      }

     if (keyDown("left_arrow")){
      red.x=red.x-3
     }
     
     if(keyDown("right_arrow")){
      red.x=red.x+3
     } 

     if (keyDown("space")){
      red.velocityY=-10
     }

     red.velocityY=red.velocityY+0.8

     spawnplans()

  

     if (shipGroup.isTouching(red) || red.y>600)
     {
      red.destroy();
      gameState="end"
    }
  
}

if(gameState==="end"){
  textSize(30)
  fill("yellow")
  text("Game Over",230,250)
}
}

function spawnplans(){
  if (frameCount%200===0){
var plans=createSprite(200,0)

plan.addImage(planImg)
plan.velocityY=1
  
plan.x=Math.round(random(100,400))



var ship=createSprite(200,15)
ship.velocityY=1
ship.height=2
ship.x=plan.x
red.depth=plan.depth
red.depth+=1

plan.lifetime=700
ship.lifetime=700

plansGroup.add(plan)
shipGroup.add(ship)
ship.debug=true
}
}