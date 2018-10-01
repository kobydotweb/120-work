function setup() {
    // create a canvas to draw on
    createCanvas( 600, 800 );
}

function draw() {

    // background
    background( 'beige' );

    /* ***************************** */
    /* MAIN SANDBOX */
    /* ***************************** */
    push();

    // set the grid center( x:0, y:0 )
    // to canvas center
    translate( 300, 400 );


    /* ***************************** */
    /* ARMS */
    /* ***************************** */
    push();
    translate( 0, 0 );

    // left arm
    stroke( 'pink' );
    strokeWeight( 30 );

    line(100, -100, -500, 100 );



    // right arm
    rotate( PI );
    stroke( 'pink' );
    strokeWeight( 30 );
    line( -140, 0, -200, -100 );
    line( -200, -100, -200, -200 );

    // hand
    stroke( 'red' );
    strokeWeight( 50 );
    point( -200, -200 );

    pop(); // ARMS END


    /* ***************************** */
    /* BODY */
    /* ***************************** */
    push();
    // SHIRT
    fill('pink')
    rect( -150, -100, 300, 300 );



    // SQUARE
    push();
    fill( 'white' );
    translate(-150, -100);
    rect(100, 100, 100, 100);
    translate(87, 0);


    pop(); // BODY END!


    /* ***************************** */
    /* LEGS */
    /* ***************************** */
    push();
    translate( 0, 200 );

    // left leg
    fill( 'green' );
    triangle( -90, 0, 0, 50, -500, 300 );
    // right leg
    scale( -1, 1 );
    triangle( -90, 0, 0, 50, -300, 700);
    pop(); // LEGS END


    /* ***************************** */
    /* HEAD */
    /* ***************************** */
    push();
    translate( 0, -175 );

    fill( 'yellow' );
    ellipse( 10, 10, 250, 200 );

    // mouth
    fill('red');
    arc(
        0,
        20,
        200,
        60,
        radians(350),
        radians(190),
        PIE
    );



    // nose
    fill('pink')
    triangle( 40, -30, 70, 70, 0, 0 );

    // eyes
    // left
    push();
    translate( -40, -30 );

    fill('beige');
  ellipse( 10, 10, 40, 40 );
      noFill();
    fill( 'green' );
    ellipse( 10, 10, 30 );
    fill( 0 );
    ellipse( 10, 10, 20 );

    fill( 'brown' );
    quad( -20, -20, -20, -10, 70, -10, 70, -15 );
    pop();

    // right
    push();
    translate( 80, -20 );

    fill('beige');
    ellipse( 10, 10, 40, 40 );
    noFill();
    fill( 'green' );
    ellipse( 10, 10, 30 );
    fill( 0 );
    ellipse( 10, 10, 20 );
    fill( 'brown' );
    quad( -20, -20, -20, -10, 70, -10, 70, -15 );
    pop();

    pop(); // HEAD END




    pop();
}
