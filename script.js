/* Select an Element */

const canvas = document.getElementById(".canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200, 0, 200)";
ctx.fillRect(50, 100, 100, 30);

ctx.fillStyle = "rgb(100, 100, 200)";
ctx.fillRect(50, 140, 100, 30);


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // ellipse(50,50,80,80);
}

let y = 100;
/* Functions */

function setup() {
  createCanvas(720, 400);
  stroke(255);
  frameRate(30);
}

function draw() {
  background(0); //Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}



