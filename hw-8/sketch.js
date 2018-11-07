function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(4);
}

function draw() {
	background(`pink`);
	for (let i = 20; i < 1000; i += 20) {
		line(1.5*i, 0, 5*i, 1000);
		// line(5*i, i*10, 1*i, 400);
    line(10*i, i*10, 1*i, 10);

    line(1.5*i, i*3, 1/i, 800);
    // line(3*i, 1.5*i, i, 50);

    text("EEEEEEEEE", 450, 600);
    text("EEEEEEEEE", 1300, 100);





	}
}
