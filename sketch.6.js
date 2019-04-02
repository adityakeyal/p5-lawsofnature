/*
* Oscillation - Ch 1.

*/



let angle = 0;
let velocity = 0
let acceleration = 0;

function setup() {
  frameRate(100)
  createCanvas(600,400)
  angleMode(DEGREES)
  rectMode(CENTER)
  
 


}

function draw() {


  

  angle +=velocity
  velocity+=acceleration

    background(0)
    fill(255)
    translate(width/2,height/2)
    rotate(angle)
    rect(0,0,100,50)

    acceleration = map(mouseX,0,width , -0.1 , 0.1)
    
}