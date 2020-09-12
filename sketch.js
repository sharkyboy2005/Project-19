var backImage, player_running, bananaImage, obstacle_img, invi, jungle, player;
function preload() {
    backImage = loadImage("jungle.jpg");

  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png");
}

function setup() {
  createCanvas(600, 200);
  player = createSprite(300, 200, 10, 10);
}

function draw() {
  background("darkgreen");
}

/*function food () {
  if (frameCount %80 === 0){
    var rand = Math.random(120, 200);
    var peel = createSprite(400, rand, 10, 10);
    peel.addAnimation("b", banana);
    peel.scale = 0.05;
    peel.lifetime = 150;
    peel.velocityX = -5;
    bananaGroup.add(peel);
  }
}

//Animate a rock every 300 frames
function rock () {
  if (frameCount %80 === 0){
    var stone = createSprite(400, 350, 10, 10);
    banana.addAnimation("b", banana);
    stone.scale = 0.15;
    stone.lifetime = 150;
    stone.velocityX = -5;
    obstacleGroup.add(stone);
  }
}*/