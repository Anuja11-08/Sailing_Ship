var ship,ship_sailing,edges;
var seaImg,sea;

function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}


  
function setup(){
  createCanvas(400,400);
  sea= createSprite(400,200);
  sea.addImage("smoothsea",seaImg);
  ship= createSprite(200,350,20,40);
  ship.addAnimation("seaship",ship_sailing);

  edges= createEdgeSprites();
  
  ship.x=200;
  ship.scale=0.4
  
}



function draw() {
  background("blue");
  if (seaImg.x<0){
    seaImg.x=seaImg.width/2;
  }

  console.log(ship.y);
  ship.collide(edges[3]);
drawSprites();
}
