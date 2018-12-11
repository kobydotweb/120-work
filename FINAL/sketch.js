let bubbles = [];
let flower;
let images = [];

function preload() {
  flower = loadImage('images/flower.png');

  for (let i = 0; i < 51; i++) {
    images[i] = loadImage(`images/png${i}.png`);
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let r;
  let x;
  let y;
  let speedX;
  let speedY;
  frameRate(60);

  for (let i = 0; i < 200; i++) {
    r = random(40, 250);
    x = random(r, width - r);
    y = random(r, height - r);
    speedX = random(-2.5,2.5);
    speedY = random(-2.5,2.5);
    bubbles.push(new Bubble(x, y, r, speedX, speedY));
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();

    if(bubbles[i].x + bubbles[i].r > width || bubbles[i].x < 0)
    {
      bubbles[i].speedX = bubbles[i].speedX * -1;
    }
    if(bubbles[i].y + bubbles[i].r > height || bubbles[i].y < 0)
    {
      bubbles[i].speedY = bubbles[i].speedY * -1;
    }
  }
}

class Bubble {
  constructor(x, y, r, speedX, speedY, img) {
    this.speedX = speedX;
    this.speedY = speedY;
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = random(images);
  }

  clicked(px, py) {
    if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
      this.image = flower;
    }
  }

  move() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }


  show() {
    image(this.image, this.x, this.y, this.r, this.r);
  }
}
