var BlueHill, BlueHillImage
var SonicRun, SonicRunImage


function preload(){
SonicRunImage = loadImage("images/SonicRun.gif");
BlueHillImage = loadImage("images/Blue_Hill.png")


}

function setup() {
  createCanvas(800, 800); 
  background("white")

  BlueHill = createSprite(400,400,800,800);
  BlueHill.addImage("Blue_Hill", BlueHillImage)
  BlueHill.scale = 5
    
  SonicRun = createSprite(200,600,50,50);
  SonicRun.addImage("SonicRun", SonicRunImage);
  SonicRun.scale = 0.5




}

function draw() {

 
  if(keyDown(RIGHT_ARROW)) {
    SonicRun.x = SonicRun.x + 5
    camera.position.x = SonicRun.x
    }
    if(keyDown(LEFT_ARROW)){
      SonicRun.x = SonicRun.x - 5
      camera.position.x = SonicRun.x
      }

  

 drawSprites();
}
