var gameState = 0;
var playbutton, playbuttonImg;
var helpbutton, questionmarkImg;
var bg, backgroundImg;
var lvl1, lvl2, lvl3,Lvl1,Lvl2,Lvl3;
var playerPlane, opponentPlane;
var playerPlaneImg, opponentPlaneImg;
var playerBullets, opponentBullets;
var playerBulletsImg,opponentBulletsImg;
var invisWall;
var edges;

function preload() {
  playbuttonImg = loadAnimation("Assets/play_button.gif");
  questionmarkImg = loadAnimation("Assets/question-markbutton.gif");
  bg = loadImage("Assets/Background.jpg");
  Lvl1 = loadImage("Assets/Lvl1.png");
  Lvl2 = loadImage("Assets/Lvl2.png");
  Lvl3 = loadImage("Assets/Lvl3.png");
  playerPlaneImg = loadImage("Assets/Fighter jet.png");
  opponentPlaneImg = loadImage("Assets/Opponent Fighter plane.png");
  playerBulletsImg = loadImage("Assets/Bullets Player.png");
  opponentBulletsImg = loadImage("Assets/Bullets Opponent.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  playbutton = createSprite(320, 370, 50, 50);
  playbutton.addAnimation("play", playbuttonImg);
  playbutton.scale = 0.2;

  helpbutton = createSprite(850, 370, 50, 50);
  helpbutton.addAnimation("help", questionmarkImg);
  helpbutton.scale = 0.5;

    //  lvl1 = createSprite(305,237,75,75);
    //  lvl1.addImage("level1",Lvl1);
  
    //  lvl2 = createSprite(819,237,75,75);
    //  lvl2.addImage("level 2",Lvl2);

    //  lvl3 = createSprite(562,461,75,75);
    //  lvl3.addImage("level 3",Lvl3);

    playerPlane = createSprite(101,258,50,50);
    playerPlane.addImage("pc",playerPlaneImg);
    playerPlane.scale = 0.4;
    playerPlane.visible = false;
  
  // playerBullets = createSprite(playerPlane.x,playerPlane.y,50,50)
  // playerBullets.addAnimation("pc",playerBulletsImg);
  // playerBullets.scale = 0.01;


  opponentPlane = createSprite(1038, 259, 50, 50);
  opponentPlane.addAnimation("npc",opponentPlaneImg);
  opponentPlane.scale = 0.4;
  opponentPlane.visible = false;
  opponentPlane.velocityY  = -20;

  //  invisWall = createSprite(700,285,950,windowHeight);
  //  invisWall.visible = false;

  // opponentBullets = createSprite(opponentPlane.x,opponentPlane.y,50,50);
  // opponentBullets.addAnimation("npc", opponentBulletsImg);
  // opponentBullets.scale = 0.01;

  edges = createEdgeSprites();
  
  
}

function draw() {
  background(bg);

  if (mousePressedOver(playbutton)) {
    playbutton.visible = false;
    helpbutton.visible = false;
    gameState = 1;
   
  }

  if(gameState === 1){
     opponentPlane.visible = true;
     playerPlane.visible = true;
    shoot();
    var speed = [50,100,-50,-100]
    
    if(opponentPlane.collide(edges[1])){
      opponentPlane.velocityY  = 20;
  
    }

   //   playerPlane.x = mouseX;
     playerPlane.y = mouseY;
    //  invisWall.visible = true;
    
    
       
  }

  playerPlane.collide(edges);
 
  opponentPlane.bounceOff(edges);
  textSize(30);
  text(mouseX + " , " + mouseY, mouseX, mouseY);
  drawSprites();
}


function shoot() {
  if(frameCount % 100 === 0) {
  opponentBullets = createSprite(opponentPlane.x,opponentPlane.y,50,50);
  opponentBullets.scale = 0.05;
  opponentBullets.addImage("npc",opponentBulletsImg);
opponentBullets.velocityX = -25;
  }

}
// Create a function called shoot
// every 100 frames - trex game (obstacles)
// create the sprite it should the same x and y position as opponent plane , add image,scale , give velocity, add to a group
// call the function in game state 1