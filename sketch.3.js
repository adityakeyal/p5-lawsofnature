/**
 * Perlin noise in 3 dimensions
 */
let inc = 0.1;
let scl = 10;
let rows,cols;
let fr;

let zoff = 0;


function setup() {
  
 createCanvas(200,200)

  rows = height/scl;
  cols = width/scl;
  fr = createP('')
}
function draw() {

  background(255)
  let yoff = 0;

  for(let y=0;y<rows;y++){
    let xoff = 0;
    for(let x=0;x<cols;x++){
    
        let r = noise(xoff,yoff,zoff);
        xoff +=inc;

        let v = p5.Vector.fromAngle(r*2*PI)
        fill(floor(r))
        stroke(0);
        push()
        translate(x*scl,y*scl)
        rotate(v.heading())
        line(0,0,scl,0)
        pop()

        //rect(scl*x,scl*y,scl,scl)
        
    }
    yoff +=inc;

  }

  fr.html(floor(frameRate()))

  // start +=0.01
  zoff+=0.02
   
}