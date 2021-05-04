var canvas;

var b1;
var disc2;
var disc3;
var disc4;
var box;

function preload(){

    

}


function setup(){

    canvas = createCanvas(800,600);


    b1 = createSprite(100,580,180,20);

   b1.shapeColor = "blue";


    b2 = createSprite(300,580,180,20);

   b2.shapeColor = "yellow";


    b3 = createSprite(500,580,180,20);

    b3.shapeColor = "red"


    b4 = createSprite(700,580,180,20);

   b4.shapeColor = "green";



    box = createSprite(Math.round(random(100,700)),50,50,50);

    box.velocityX = Math.round(random(-8,6));

    box.velocityY = Math.round(random(2,8));

}

function draw() {
    background(rgb(169,169,169));
    
    if(box.x > 775 || box.x < 25) {

        box.velocityX = box.velocityX * (-1);

    }
    if(box.y > 775 || box.y < 0) {

        box.velocityY = box.velocityY * (-1);

    }
    if(b1.y - box.y <= 35 && box.x < 190) {

        box.velocityX=box.velocityX*(-1)
        box.velocityY=box.velocityY*(-1)
        box.shapeColor = b1.shapeColor;

       

    }


    if(b2.y - box.y <= 35 && box.x < 390 && box.x > 210) {

       box.velocityX=0
       box.velocityY=0
        box.shapeColor = b2.shapeColor;

    }


    if(b3.y - box.y <= 35 && box.x > 410 && box.x < 590) {

        box.velocityX=box.velocityX*(-1)
        box.velocityY=box.velocityY*(-1)
        box.shapeColor = b3.shapeColor;

    }


    if(b4.y - box.y <= 35 && box.x > 610 && box.x < 790) {

        box.velocityX=box.velocityX*(-1)
       box.velocityY=box.velocityY*(-1)

        box.shapeColor = b4.shapeColor;

    }

    drawSprites();

}
