var speed = 4;
frameRate = 100;
confetti = [];

function setup() {

    createCanvas(windowWidth, windowHeight);

    for(let i = 0; i<50; i++){
        let confettiFlake = {
            opacity: random(0, 255),
            x: random(0, windowWidth),
            y: random(0, windowHeight),
        }
        confetti.push(confettiFlake);
    }
}

function draw() {

    background(0);

    for(let i = 0; i<confetti.length;i++){
        flake = confetti[i];
        fill(255, 0, 255, flake.opacity);
        ellipse(flake.x, flake.y, 50);
        if(flake.opacity > 1){
            flake.opacity -= speed;
        } else {
            flake.opacity = 255;
        }
    }

}