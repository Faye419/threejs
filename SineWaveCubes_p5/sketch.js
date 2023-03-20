let canvas;
let easyCam;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("sketch-container"); //move our canvas inside this HTML element

   
    easyCam = createEasyCam();

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

    //create pattern
    for (var x = -400; x <= 400; x += 50) {
        for (var z = -400; z <= 400; z += 50) {
            push();
            translate(x, 0, z);
            var distance = dist(x, 0, z, 0, 0, 0);
            var length = sin(distance + frameCount * 5) * 100 + 200;
            box(50, length, 50);
            pop();
        }
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

