/*
*

    Simple Pendulum using Polar coordinates


    |
    |
    |
    |
    O


 */


 



let p;
function setup() {
  createCanvas(600,400)
  angleMode(DEGREES)
  background(51)

  p = new Pendulum(50,0);




}

function draw() {

  background(51)

  p.applyAcceleration(0.01)

  p.update()
  p.show(0)

    
}


function Pendulum(initialR , initialA){

    this.r = initialR;
    this.a = initialA;


    this.aVelocity = 0;
    this.aAcceleration = 0;

    this.applyAcceleration = function(appA){

      this.aAcceleration = appA;



    }


    this.update = function(){

      this.aVelocity += this.aAcceleration;
      this.aVelocity = constrain(this.aVelocity, 0, 1)
      


      this.a += this.aVelocity;



    }

    this.show = function(){

      translate(width/2,height/2);
      let x = this.r*sin(this.a)
      let y = this.r*cos(this.a)

      stroke(255)
      fill(255)

      line(0,0,x,y)
      ellipse(x,y,10)


    }




}