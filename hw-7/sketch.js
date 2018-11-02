let tri = {};
tri.width = 10;
tri.x = 5;
tri.y = 5;
tri.delta_x = 100;
tri.delta_y = 10;
tri.scale_x = 50;
tri.scale_y = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}



function draw() {

    tri.x += tri.delta_x / tri.scale_x;
    tri.y += tri.delta_y / tri.scale_y;


    if (tri.x >= width || tri.x <= 0) {
        tri.delta_x = -1 * tri.delta_x;
    }
    if (tri.y >= height || tri.y <= 0) {
        tri.delta_y = -1 * tri.delta_y;
    }

    triangle(tri.x, tri.y, tri.width, tri.width);
}

function mousePressed() {
    tri.scale_x = map(mouseX, 500, width, 20, 50);
    tri.scale_y = map(mouseY, 500, height, 0, 10);
}
