// declaring variables
var diam = 30;
var xPos = 25;
var yPos = 25;
var speed = 5;

var xPos2 = 50;
var yPos2 = 50;
var speed2 = 5;

var xPos3 = 75;
var yPos3 = 75;
var speed3 = 5;

// canvas setup (canvas size,stroke weight,  and background)
function setup() {
    createCanvas(600,600);
    background (0);
    strokeWeight(1);
}

// draw (shapes and if statements)
function draw() {
    // first circle
    fill(255,0,0,150);
    ellipse(xPos,yPos,diam,diam);

        // moves the circle down the canvas
        if(yPos <= 575 && xPos < diam) {
            yPos = yPos + speed;
        }

        //changes the direction of the circle to go right across the canvas
        if(yPos >= 575) {
            yPos = 575;
            xPos = xPos + speed;
        }

        // changes the direction of the circle to go up the canvas
        if(xPos >= 575) {
            xPos = 575;
            yPos = yPos - speed;
        }

        //changes the direction of the circle to go left across the canvas
        if(yPos <= 25) {
            yPos = 25;
            xPos = xPos - speed;
        }

        // stops the circle when it goes back to the starting point
        if(xPos == 25 && yPos == 25) {
        speed = 0;
        }

    // second circle
    fill(0,255,0,150);
    ellipse(xPos2,yPos2,diam,diam);

        // moves the circle down the canvas
        if(yPos2 <= 550 && xPos2 < diam + 25) {
            yPos2 = yPos2 + speed2;
        }

        //changes the direction of the circle to go right across the canvas
        if(yPos2 >= 550) {
            yPos2 = 550;
            xPos2 = xPos2 + speed2;
        }

        // changes the direction of the circle to go up the canvas
        if(xPos2 >= 550) {
            xPos2 = 550;
            yPos2 = yPos2 - speed2;
        }

        //changes the direction of the circle to go left across the canvas
        if(yPos2 <= 50) {
            yPos2 = 50;
            xPos2 = xPos2 - speed2;
        }

        // stops the circle when it goes back to the starting point
        if(xPos2 == 50 && yPos2 == 50) {
            speed2 = 0;
        }

    // third circle
    fill(0,0,255,150);
    ellipse(xPos3,yPos3,diam,diam);

        // moves the circle down the canvas
        if(yPos3 <= 525 && xPos3 < diam + 50) {
            yPos3 = yPos3 + speed3;
        }

        //changes the direction of the circle to go right across the canvas
        if(yPos3 >= 525) {
            yPos3 = 525;
            xPos3 = xPos3 + speed3;
        }

        // changes the direction of the circle to go up the canvas
        if(xPos3 >= 525) {
            xPos3 = 525;
            yPos3 = yPos3 - speed3;
        }

        //changes the direction of the circle to go left across the canvas
        if(yPos3 <= 75) {
            yPos3 = 75;
            xPos3 = xPos3 - speed3;
        }

        // stops the circle when it goes back to the starting point
        if(xPos3 == 75 && yPos3 == 75) {
            speed3 = 0;
        }
}