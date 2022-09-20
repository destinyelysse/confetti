var opacity = 255;
var speed = 4;
frameRate = 100;

function setup() {

    createCanvas(windowWidth, windowHeight);

}

function draw() {

    background(0);

    fill(255, 0, 255, opacity);

    ellipse(windowWidth/2, windowHeight/2, 50);

    if(opacity > 1){
        opacity -= speed;
    } else {
        opacity = 255;
    }

}