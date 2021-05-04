var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
bluebrick =createSprite(100,580,200,20);
bluebrick.shapeColor="blue";

yellowbrick =createSprite(300,580,200,20);
yellowbrick.shapeColor="yellow";

pinkbrick =createSprite(500,580,200,20);
pinkbrick.shapeColor="maroon";

greenbrick =createSprite(700,580,200,20);
greenbrick.shapeColor="green";

brick =createSprite(random(20,750),300,20,20);
brick.shapeColor="white";

brick.velocityX=2;
brick.velocityY=3;
    //create box sprite and give velocity
edges=createEdgeSprites()
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
brick.bounceOff(edges);
//brick.bounceOff(bluebrick);
//brick.bounceOff(yellowbrick);
//brick.bounceOff(greenbrick);
if (bluebrick.isTouching(brick)&& brick.bounceOff(bluebrick)){

    brick.shapeColor="blue"
    music.play();
}
if (yellowbrick.isTouching(brick)&& brick.bounceOff(yellowbrick)){

    brick.shapeColor="yellow"
    music.play();
}
if (greenbrick.isTouching(brick)&& brick.bounceOff(greenbrick)){

    brick.shapeColor="green"
    music.play();
}
if (brick.isTouching(pinkbrick)){

    brick.shapeColor="white"
    brick.velocityX=0;
    brick.velocityY=0;
}
    //add condition to check if box touching surface and make it box
    drawSprites();
}
