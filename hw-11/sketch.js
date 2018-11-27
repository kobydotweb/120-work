let Circles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    let b = new Circle(width/2, height/2, 10);
    Circles.push(b);
}

function mousePressed() {
    let r = random(0, 100);
    let b = new Circle(mouseX, mouseY, r);
    Circles.push(b);
}

function draw() {
    background(0);
    for (let i = 0; i < Circles.length; i++) {
        Circles[i].move();
        Circles[i].show();
    }
}

class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(0,2);
        this.y = this.y;
    }

    show() {

      stroke(500);
      noFill();
      ellipse(this.x, this.y, this.r * 2);

      fill(204);
      triangle(this.x, this.y, this.x, this.y, this.r /100, 0);
    }
}
