/*

Oscillators 

 x = Amp * sin(theta)
 theta =   (frameCount / period ) * 2 * PI

*/


// An array of objects
let oscillators = [];

function setup() {
  createCanvas(640, 360);
  // Initialize all objects
  for (let i = 0; i < 10; i++) {
    oscillators.push(new Oscillator());
  }
}

function draw() {
  background(51);
  // Run all objects
  for (let i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].show();
  }
}


function Oscillator(){

      this.angle = createVector();
      this.velocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
      this.amplitude = createVector(random(50, width / 2), random(20, height / 2));

      this.color = random(75, 255)


      this.oscillate = function() {
          this.angle.add(this.velocity);
      }


    this.show = function(){


      
    let x = sin(this.angle.x) * this.amplitude.x;
    let y = sin(this.angle.y) * this.amplitude.y;

    push();
    translate(width / 2, height / 2);
    stroke(this.color);
    strokeWeight(2);
    fill(this.color, this.color);
    line(0, 0, x, y);
    ellipse(x, y, 32, 32);
    pop();
      


    }




}