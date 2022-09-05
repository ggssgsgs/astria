let NUMSINES = 2; // how many of these things can we do at once?
let sines = new Array(NUMSINES); // an array to hold all the current angles
let rad; // an initial radius value for the central sine
let i; // a counter variable

// play with these to get a sense of what's going on:
let fund = 0.005; // the speed of the central sine
let ratio = 1; // what multiplier for speed is each additional sine?
let alpha = 50; // how opaque is the tracing system

let trace = false; // are we tracing?

//set img
let logoWidth = 1080 / 5;
let logoHeight = 1139 / 5;

let moonBGWidth = 1080 / 4;
let moonBGHeight = 1446 / 4;

let starHolderWidth = 1080 / 10;
let starHolderHeight = 1160 / 10;

//green moon
let pos = 0;
let posChangeScale = 1;

//spiral
let angle = 45.0;
let speedAngle = 0.05;
let offsetX = 300;
let offsetY = 300;
let scalar = 55;
let scalarChange = 1;
let speed = 3;
let col = {
  r: 255,
  g: 0,
  b: 0,
};
let angleForSize = 0;
let img;

//let x = 1;
let reverse = false;

//gradient
let c1;
let c2;
const Y_AXIS = 1;
const X_AXIS = 2;

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("myContainer");
  myCanvas.position(0, 0);
  myCanvas.style("z-index", 2);
  imgLOGO = loadImage("img/LOGO.png");
  imgMoonBg = loadImage("img/moonBg.png");
  imgStarHolder = loadImage("img/starHolder.png");
  rad = height * 0.2; // compute radius for central circle
  background(255); // clear the screen

  for (let i = 0; i < sines.length; i++) {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }

  //Create layer
  spiralLayer = createGraphics(width, height);
  spiralLayer.position(0, 0);
  spiralLayer.style("z-index", 2);
  spiralLayer.noStroke();

  //set position
  offsetX = width / 2;
  offsetY = height / 4;

  //set color
  c1 = color(0, 16, 85, 40);
  c2 = color(255, 255, 255, 100);
}
//spiral
function changing() {
  angleForSize = frameCount * 0.02;
}
function drawSpring(layer) {
  changing();
  layer.push();

  col.r = random(200, 255);
  col.g = random(200, 255);
  col.b = random(200, 250);

  var x = offsetX + (cos(angle) * scalar * 2 * scalarChange) / 2;
  var y = offsetY + ((sin(angle) / 2) * scalar * scalarChange) / 2;
  layer.fill(col.r, col.g, col.b);
  layer.noStroke();
  layer.ellipse(x, y, 2, 1);

  angle += speedAngle;

  offsetY += 0.1;

  scalarChange = 2 + cos(angleForSize / (2 * PI));
  layer.pop();

  image(layer, 0, 0);
}

function draw() {
  if (!trace) {
    //background(0, 16, 85,10); // clear screen if showing geometry ;Tranparency to create effect fading-like
    setGradient(0, 0, width, height, c1, c2, 1);
    push();
    //image(imgMoonBg, width/2 - (moonBGWidth/2), height/6 - (moonBGHeight/2)+(starHolderHeight/4*3),moonBGWidth,moonBGHeight);
    pop();
    stroke(0, 255, 0); // Green pen
    fill(0, 255, 0); //  fill
  }

  drawSpring(spiralLayer);

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width / 2, height / 4); // move to middle of screen
  if (pos < 0) {
    ellipse(0, 0, 200, 200);
  } else {
    fill(0, 255, 0, 255 - pos * 0.6);

    noStroke();
    ellipse(0, pos, 200 * posChangeScale, 200 * posChangeScale);
  }

  image(
    imgStarHolder,
    -(starHolderWidth / 2) + 5,
    -(starHolderHeight / 2) + (starHolderHeight / 4) * 3,
    starHolderWidth,
    starHolderHeight
  );

  for (let i = 0; i < sines.length; i++) {
    let erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    if (trace) {
      stroke(0, 0, 255 * (float(i) / sines.length), alpha); // blue
      fill(0, 0, 255, alpha / 2); // also, um, blue
      erad = 5.0 * (1.0 - float(i) / sines.length); // pen width will be related to which sine
    }
    let radius = rad / (i + 1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    if (!trace) {
      noFill();
      stroke(255);
      ellipse(0, 0, radius * 1.2, radius * 2); // if we're simulating, draw the sine ORBIT!!
      fill(0, 255, 0); //fil l small planet
    }

    push(); // go up one level
    translate(0, radius); // move to sine edge
    if (!trace) {
      noStroke();
      ellipse(0, 0, 15, 15); // draw a little planet
    }
    if (trace) ellipse(0, 0, erad, erad); // draw with erad if tracing
    pop(); // go down one level

    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i] + (fund + fund * i * ratio)) % TWO_PI; // update angle based on fundamental
  }

  pop(); // pop down final transformation
}

function mouseWheel(event) {
  //print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta * 0.5;
  //uncomment to block page scrolling
  //return false;
  posChangeScale = cos((pos * 0.1) / (2 * PI));
}

function keyReleased() {
  if (key == " ") {
    trace = !trace;
    background(255);
  }
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
