class Color {
    constructor(_r,_g,_b){
      this.r = _r;
      this.g = _g;
      this.b = _b;
    }
  }

let canvas;
let easyCam;
let color;
let displayState = 0;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("sketch-container"); //move our canvas inside this HTML element

   
    easyCam = createEasyCam();
    color = new Color(255,0,0);

    gui = new dat.GUI();
  gui.add(color, 'r', 0, 255);
	gui.add(color, 'g', 0, 255);
	gui.add(color, 'b', 0, 255);

    let state = {
        distance: 1500,
        center  : [0, 0, 0],
        rotation: [0.9279116079642078, -0.2760465000923418, -0.2415840653641595, 0.06644935631122713]
      };
    easyCam.setState(state, 0); //you can use the second parameter to animate
    //TIP: console.log out easyCam.getRotation() in draw to find a rotation you like
}

function draw() {
    background(0);
    angleMode(DEGREES);


    //set material
    //lights();
    //ambientMaterial(255,0,0);
    normalMaterial();
    noStroke();
    lights();
    ambientMaterial(color.r,color.g,color.b);
    

    //create pattern
    for (var x = -400; x <= 400; x += 50) {
        for (var z = -400; z <= 400; z += 50) {
            push();
            translate(x, 0, z);
            var distance = dist(x, 0, z, 0, 0, 0);
            var length = sin(distance + frameCount * 5) * 50 + 200;
            box(50, length, 50);
            pop();
        }
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

