function setup() {
    createCanvas( 800, 600 );
    background( 'rgb(255, 210, 94)' );
}

function draw() {
    noCursor();
    fill( 255 );
    ellipse( mouseX, mouseY, 40 );
}
