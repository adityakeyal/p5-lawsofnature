/*
Perlin Noise - is the noise() function in P5 used to 
generate a perlin noise or a related random function.
A perlin noise has a few aspects : 
noise(offset) - offset - Is the time offset
noiseDetail(load , falloff) - lod is the no of octave , falloff is how much the next octave should be divided by 

*/

let start = 0;
let inc = 0.01;

function setup() {
  
 createCanvas(600,400)

 


}
function draw() {
   background(51)
noiseDetail(lod, falloff)
  fill(50,90,150)
  // noStroke()
  stroke(255)
  // // let x = random(width)
  // let x = map(noise(xoff),0,1,0,width)
  // let y = map(noise(xnewoff),0,1,0,height)
  
  // xoff+=0.01
  // xnewoff+=0.01

  // ellipse(x,y,2,2)
  let xoff = start;
  noFill();
  beginShape();
  for(let x=0;x<width;x++){
    let n = map(noise(xoff),0,1,-50,50);
    let s = map(sin(xoff),-1,1,0,height);


    let y = n+s;
    xoff+=inc
    vertex(x,y)
  }
  endShape();
  start = start+inc;
// noLoop(); 


}