/*
* Polar Coordinates - Spiral
*  SOH CAH TOA

            /|
         h / | o
          /  |
         /th_|
           a

Polar = r,th


Cartesian - x = h*sin(th)
          - y = h*cos(th)


 */


 let dx = 0
 let dy = 0




function setup() {
  createCanvas(600,400)
  angleMode(DEGREES)
  background(255)
}

function draw() {


  translate(width/2 + dx , height/2 + dy)

  stroke(0)
  fill(0)


  let r = 0;
  let a = 0;


  for(i=0;i<360*4;i++){
    x= r*sin(a)
    y= r*cos(a)
    point(x,y)
    r+=.01
    a++
  }

   dx  = random(-300,300)
   dy  = random(-200,200)
  


  // noLoop()

    
}