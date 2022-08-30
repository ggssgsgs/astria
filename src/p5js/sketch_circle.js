let angle = 45.0;
let speedAngle = 0.05;
let offsetX = 300;
let offsetY = 300;
let scalar = 35;
let scalarChange = 1;
let speed = 3;
let col = {
  r: 255,
  g: 0,
  b: 0,
};
let angleForSize = 0;
let img;

let x = 1;
let reverse = false;
function preload() {
  img = loadImage("./img/moonBg.png");
}

function setup() {
  //   createCanvas(600, 1200);
  let myCanvas = createCanvas(windowWidth, windowHeight);

  myCanvas.parent("imgContainer");
  myCanvas.position(0, 0);
  myCanvas.style("z-index", 4);
  noStroke();
  //background(0, 16, 85);
  //image(img, 50, 50, 500, 600);
  //background(image, "./img/moonBg.png");
}
// function offsetVarry() {
//   if (angle % PI === 0) {
//     offsetX += 50;
//   }
// }

function changing() {
  angleForSize = frameCount * 0.02;
}

function drawSpring() {
  changing();
  push();

  col.r = random(200, 255);
  col.g = random(200, 255);
  col.b = random(200, 250);

  var x = offsetX + (cos(angle) * scalar * 2 * scalarChange) / 2;
  var y = offsetY + ((sin(angle) / 2) * scalar * scalarChange) / 2;
  fill(col.r, col.g, col.b);
  noStroke();
  ellipse(x, y, 2, 1);

  angle += speedAngle;

  offsetY += 0.1;

  scalarChange = 2 + cos(angleForSize / (2 * PI));
  pop();
}

function draw() {
  //drawSpring();
  push();

  fill(00, 255, 00, 100);
  // fill(98, 255, 53);
  ellipse(300, offsetY - 50, scalarChange * 50, scalarChange * 50);

  pop();
  //img.position(0, 0);
}
