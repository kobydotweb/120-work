var triangle;

let triangle_min = 0;
let triangle_max;

function setup() {
    createCanvas( windowWidth, windowHeight );

    triangle_max = width - 50;
}

function draw() {
    background( 'black' );

    // map mouseX to the position of triangle
    let triangle_size = map( mouseX, 0, width, triangle_min, triangle_max );

    // first shape
// triangle(mouseX, 300, mouseY, 100, 310, 80);
// triangle(200, mouseX, mouseY, 300, 510, 280);
// triangle(500, 300, mouseX, mouseY, 710, 480);
// triangle(800, 100, 200, mouseX, mouseY, 700);
// triangle(1000, 600, 700, 200, mouseX, mouseY);
// triangle(mouseX, 700, mouseY, 0, 10, 280);

// final shape
triangle(mouseX, 100, mouseY, 100, 110, 0);
triangle(mouseX, 200, mouseY, 200, 210, 10);
triangle(mouseX, 300, mouseY, 300, 310, 20);
triangle(mouseX, 400, mouseY, 400, 410, 30);
triangle(mouseX, 500, mouseY, 500, 510, 40);
triangle(mouseX, 600, mouseY, 600, 610, 50);




}
