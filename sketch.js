var ground;
var backgroundImage;
var rocket, rocketImage;
var planet1, planet2, planet3, planet4, planet5, planet6, planet7, planet8, planet9;
var rocketBurstImage;
var gameState = "Play";
var score = 0;

function preload() {
  backgroundImage = loadImage("backImage.jpg");
  rocketImage = loadImage("rocketImage.png");
  rocketBurstImage = loadImage("Bursting.png");
  planet1 = loadImage("Planets 1.png");
  planet2 = loadImage("Planets 2.png");
  planet3 = loadImage("Planets 3.png");
  planet4 = loadImage("Planets 4.png");
  planet5 = loadImage("Planets 5.png");
  planet6 = loadImage("Planets 6.png");
  planet7 = loadImage("Planets 7.png");
  planet8 = loadImage("Planets 8.png");
  planet9 = loadImage("Planets 9.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ground = createSprite(windowWidth / 2, windowHeight / 2, 50, height);
  ground.addImage(backgroundImage, "backImage.jpg");
  ground.velocityY = 2;

  rocket = createSprite(600, 400);
  rocket.addImage(rocketBurstImage, "bursting");

  planetsGroup = new Group();
}

function draw() {
  background(0);

  if (gameState === "Play") {

    if (ground.y > height - 100) {
      ground.y = windowHeight / 2;
    }

    if (keyDown("left_arrow")) {
      rocket.x -= 2;
    }

    if (keyDown("right_arrow")) {
      rocket.x += 2;
    }

    if (rocket.isTouching(planetsGroup)) {
      gameState = "End";
    }

    spawnPlanet();

  }

  drawSprites();

  if (gameState === "End") {
    fill("White");
    stroke("yellow");
    textSize(50);
    text("Game Ended", windowWidth / 2, windowHeight / 2);
    ground.velocityY = 0;
    planetsGroup.velocityYEach(0);
    rocket.addImage(rocketBurstImage, "Bursting");
  }

  fill("pink");
  textSize(20);
  text("Score:-" + score, 600, 70);

}

function spawnPlanet() {
  if (frameCount % 120 == 0) {
    var planet = createSprite(200, 20, 80, 80);
    planet.x = Math.round(random(50, windowWidth - 50));
    planet.velocityY = +2;
    planet.scale = 0.3;
    var rand = Math.round(random(1, 9));
    switch (rand) {
      case 1: planet.addImage(planet1);
        break;
      case 2: planet.addImage(planet2);
        break;
      case 3: planet.addImage(planet3);
        break;
      case 4: planet.addImage(planet4);
        break;
      case 5: planet.addImage(planet5);
        break;
      case 6: planet.addImage(planet6);
        break;
      case 7: planet.addImage(planet7);
        break;
      case 8: planet.addImage(planet8);
        break;
      case 9: planet.addImage(planet9);
        break;
      default: break;

    }
    planetsGroup.add(planet);
  }
}

