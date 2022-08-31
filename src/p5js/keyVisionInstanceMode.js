import p5 from "p5";
const script = function (p5) {
  //variables here v v v
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

  // NOTE: Set up is here
  p5.setup = (_) => {
    // const canvas = p5.createCanvas(500, 500);
    // canvas.parent("vue-canvas");

    //-----------

    let myCanvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    myCanvas.parent("vue-canvas");
    myCanvas.position(0, 0);
    myCanvas.style("z-index", 2);
    imgLOGO = p5.loadImage("../p5js/img/LOGO.png");
    imgMoonBg = p5.loadImage("../p5js/img/moonBg");
    imgStarHolder = p5.loadImage("../p5js/img/starHolder.png");
    rad = height * 0.2; // compute radius for central circle
    p5.background(255); // clear the screen

    for (let i = 0; i < sines.length; i++) {
      sines[i] = PI; // start EVERYBODY facing NORTH
    }

    //Create layer
    spiralLayer = p5.createGraphics(p5.width, p5.height);
    spiralLayer.position(0, 0);
    spiralLayer.style("z-index", 2);
    spiralLayer.noStroke();

    //set position
    offsetX = width / 2;
    offsetY = height / 4;

    //set color
    c1 = p5.color(0, 16, 85, 40);
    c2 = p5.color(255, 255, 255, 100);
  };

  //Costumised Function

  //spiral
  function changing() {
    angleForSize = frameCount * 0.02;
  }
  function drawSpring(layer) {
    changing();
    layer.push();

    col.r = p5.random(200, 255);
    col.g = p5.random(200, 255);
    col.b = p5.random(200, 250);

    var x = offsetX + (p5.cos(angle) * scalar * 2 * scalarChange) / 2;
    var y = offsetY + ((p5.sin(angle) / 2) * scalar * scalarChange) / 2;
    layer.fill(col.r, col.g, col.b);
    layer.noStroke();
    layer.ellipse(x, y, 2, 1);

    angle += speedAngle;

    offsetY += 0.1;

    scalarChange = 2 + p5.cos(angleForSize / (2 * p5.PI));
    layer.pop();

    p5.image(layer, 0, 0);
  }

  function setGradient(x, y, w, h, c1, c2, axis) {
    p5.noFill();

    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = p5.map(i, y, y + h, 0, 1);
        let c = p5.lerpColor(c1, c2, inter);
        p5.stroke(c);
        p5.line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = p5.map(i, x, x + w, 0, 1);
        let c = p5.lerpColor(c1, c2, inter);
        p5.stroke(c);
        p5.line(i, y, i, y + h);
      }
    }
  }

  //----
  p5.mouseWheel = (event) => {
    //print(event.delta);
    //move the square according to the vertical scroll amount
    pos += event.delta * 0.5;
    //uncomment to block page scrolling
    //return false;
    posChangeScale = p5.cos((pos * 0.1) / (2 * p5.PI));
  };

  p5.keyReleased = () => {
    if (key == " ") {
      trace = !trace;
      p5.background(255);
    }
  };

  // NOTE: Draw is here
  p5.draw = (_) => {
    // p5.background(245);
    // const degree = p5.frameCount * 3;
    // const y = p5.sin(p5.radians(degree)) * 50;
    // p5.push();
    // p5.translate(0, p5.height / 2);
    // p5.fill(66, 184, 131);
    // p5.stroke(53, 73, 94);
    // p5.strokeWeight(5);
    // p5.ellipse(posX, y, 50, 50);
    // p5.pop();
    // posX += speed;
    // if (posX > p5.width - 35 || posX < 35) {
    //   speed *= -1;
    // }
    //-------

    if (!trace) {
      //background(0, 16, 85,10); // clear screen if showing geometry ;Tranparency to create effect fading-like
      setGradient(0, 0, width, height, c1, c2, 1);
      p5.push();
      //image(imgMoonBg, width/2 - (moonBGWidth/2), height/6 - (moonBGHeight/2)+(starHolderHeight/4*3),moonBGWidth,moonBGHeight);
      p5.pop();
      p5.stroke(0, 255, 0); // Green pen
      p5.fill(0, 255, 0); //  fill
    }

    drawSpring(spiralLayer);

    // MAIN ACTION
    p5.push(); // start a transformation matrix
    p5.translate(p5.width / 2, p5.height / 4); // move to middle of screen
    if (pos < 0) {
      p5.ellipse(0, 0, 200, 200);
    } else {
      p5.fill(0, 255, 0, 255 - pos * 0.6);

      p5.noStroke();
      p5.ellipse(0, pos, 200 * posChangeScale, 200 * posChangeScale);
    }

    p5.image(
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
        p5.stroke(0, 0, 255 * (p5.float(i) / sines.length), alpha); // blue
        p5.fill(0, 0, 255, alpha / 2); // also, um, blue
        erad = 5.0 * (1.0 - p5.float(i) / sines.length); // pen width will be related to which sine
      }
      let radius = rad / (i + 1); // radius for circle itself
      p5.rotate(sines[i]); // rotate circle
      if (!trace) {
        p5.noFill();
        p5.stroke(255);
        p5.ellipse(0, 0, radius * 1.2, radius * 2); // if we're simulating, draw the sine ORBIT!!
        p5.fill(0, 255, 0); //fil l small planet
      }

      p5.push(); // go up one level
      p5.translate(0, radius); // move to sine edge
      if (!trace) {
        p5.noStroke();
        p5.ellipse(0, 0, 15, 15); // draw a little planet
      }
      if (trace) p5.ellipse(0, 0, erad, erad); // draw with erad if tracing
      p5.pop(); // go down one level

      p5.translate(0, radius); // move into position for next sine
      sines[i] = (sines[i] + (fund + fund * i * ratio)) % p5.TWO_PI; // update angle based on fundamental
    }

    p5.pop(); // pop down final transformation
  };
};
// NOTE: Use p5 as an instance mode

let myp5 = new p5(script);

export {myp5};
