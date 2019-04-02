/**
 * Render an image using some graphics
 * 
 */

let img;
let cir;

function setup() {
  
 createCanvas(600,400)
 background(51)

 img = loadImage("images.jpg")

 cir=[]
 for(let i=0;i<1000;i++){
    cir.push(new Circle())
 }
 


}
function draw() {
    // image(img,0,0);

  

  // background(255);
  
  for(let i=0;i<cir.length;i++){
      cir[i].show();
    }
}


Circle = function(){

  this.x = int(random(0,width));
  this.y = int(random(0,height));


  this.stepx = int(random(-5,5));
  this.stepy = int(random(-5,5));

  this.show = function(){
    noStroke();
    let xxx = img.get(this.x,this.y)
    fill(xxx,50)
    ellipse(this.x,this.y,4,4)
    this.x = this.x+this.stepx
    this.y = this.y+this.stepy
    

    if(this.x>width || this.x<0 ){
      this.stepx = - this.stepx

    }
    
    if(this.y>height || this.y<0 ){
      this.stepy = - this.stepy

    }

  }


}