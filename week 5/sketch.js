function setup() {
    createCanvas( windowWidth, windowHeight );
}

let headAngle = 0;
let armAngle = 0;


function draw() {
    // erase every frame
    background( 'pink' );
    // turn the cursor off
    noCursor();


    push();

    translate( mouseX, mouseY );

    // ARMS
    push();


    // arm1

    push();
    // move the center to facilitate rotate
    translate( -10, -20 );
    // rotate, based on mouseX position
    rotate( radians( mouseX) );
    // line-dot
    line( 100, 100, 150, 100);
    fill( 'white' );
    noStroke();
    ellipse( 150, 0, 50 );
    pop();
    pop();


        // arm2

        push();
        // move the center to facilitate rotate
        translate( -30, -50 );
        // rotate, based on mouseX position
        rotate( radians( mouseY) );
        // line-dot
        line( 100, 100, 150, 100);
        fill( 'white' );
        noStroke();
        ellipse( 150, 0, 50 );
        pop();
        pop();






    pop();

}
