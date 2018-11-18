function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1000);
}

function draw() {
    background('black');

    let num1 = floor(random(0, 200));
    let num2 = floor(random(0, 100));

    let pos = addThings(num1, num2);

    Shape( pos, pos, pos/300, 1.0 );
}


// add things
function addThings(value1, value2) {
    let result = value1 + value2;
    return result;
}


// 	TRIANGLE FUNCTION
function Shape(pos_x, pos_y, scale_x, scale_y) {
    push(); // <- Begin sandbox

    // scale and position triangles
    translate(pos_x, pos_y);
    scale(scale_x, scale_y);

    // draw triangles
		triangle(1, 100, 500, 100, mouseX, 0);
		triangle(100, 200, 400, 200, 210, 10);
		triangle(1000, 300, 300, 300, mouseY, 20);
		triangle(500, 400, 200, 400, 410, 30);
		ellipse(100, 20, 100, 200 );

    pop(); // <- End sandbox
}
