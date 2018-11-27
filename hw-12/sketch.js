// create a variable for the ball object
let balls = [];
const numOfBalls = 16;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth,windowHeight);

    // create a new ball object of class type "Ball"
    let init_x = random(0,200);
    let init_y = random(0,200);
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));
        // move the starting position over
        // This is to ensure that the balls do not start
        // "on top" of each other
        init_x += 100;
        if (init_x > width) {
            init_x = random(0,800);
            init_y += random(0,600);
        }
    }
}

function draw() {
    background('pink');

    for (let i = 0; i < balls.length; i++) {
        // call the ball's methods
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
    }
}
