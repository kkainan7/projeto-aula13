var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImage;

var score;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png");

  cloudImage = loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200);

  //crie um sprite de trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //crie um sprite ground (solo)
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  //crie um solo invisível
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  //gerar números aleatórios
  var rand = Math.round(random(1, 100));
  console.log(rand);
}

function draw() {
  //definir cor de fundo
  background(180);

  console.log(trex.y);

  // pular quando tecla espaço for pressionada
  if (keyDown("space") && trex.y >= 100) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //impedir que o trex caia
  trex.collide(invisibleGround);

  //gerar as nuvens
  spawnClouds();

  //gerar obstaculos no chão
  spawnObstacles();

  drawSprites();

function spawnObstacles(){
   if (frameCount % 60 === 0) {
  var obstacle = createSprite(600,165,10,40)
  obstacle.velocityX = -6


// //gerar obstaculos aleatorios
var rand = Math.round(random(1,6))
switch(rand)  {
case 1: obstacle.addImage(obstacle1)
         break;
case 2: obstacle.addImage(obstacle2)
         break;
case 3: obstacle.addImage(obstacle3)
         break;
case 4: obstacle.addImage(obstacle4)
         break;
case 5: obstacle.addImage(obstacle5)
         break;
case 6: obstacle.addImage(obstacle6)
         break;
    }

//atribua dimensão e tempo de vida aos obstaulos
obstacle.scale = 0.5
obstacle.lifetime = 300

  }

}

//função para gerar as nuvens
function spawnClouds() {
  if (frameCount % 150 === 0) {
    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage(cloudImage);
    cloud.velocityX = -3;
    cloud.y = Math.round(random(10, 100));
    cloud.scale = 0.1;

    //atribua tempo de vida à variavel
    cloud.lifetime = 200;

    //ajustar a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
  }
}
