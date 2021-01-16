//Create variables here
var dogImg, dogImg1;
var dog;
var database;
var foodStock;
var foodS;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.3;

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(rgb(46, 139, 87));

  stroke(5);
  fill("white");
  textSize(30);
  text("Food Remaining: "+foodS,100,150);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }


  drawSprites();

  stroke(3);
  textSize(15);
  text("Press Up Arrow to feed Jimmy!", 150,450,)
  //add styles here


}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



