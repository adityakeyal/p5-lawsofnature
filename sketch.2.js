/*
Perlin noise redition in 2D.
Perlin noise can be a 2D matrix
       x x x x x x x x x
       y y y y y y y y y
       z z z z z z z z z

       All the x are rlated to theimmediate neighbour of x and y
       And the offset between them is related through xoffset and y offset of a noise function


*/
let inc = 0.01;
let start = 0.01;

function setup() {
  
 createCanvas(600,400)
  pixelDensity(1)
}
function draw() {

  
  
  let yoff = start;

  loadPixels();
  for(let y=0;y<height;y++){
    let xoff = start;
    for(let x=0;x<width;x++){
    
        let index = (x+y*width) * 4;
        let r = 255*noise(xoff,yoff);
        pixels[index+0] =r;
        pixels[index+1] =r;
        pixels[index+2] =r;
        pixels[index+3] =255;
        xoff +=inc;
        
    }
    yoff +=inc;

  }
  updatePixels()

  // start +=0.01
   
}