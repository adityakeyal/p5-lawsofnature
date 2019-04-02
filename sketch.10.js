/**
 * Pendulum
 *     |\
 *     | \
 *     |  \
 *     |   O
 *     |  /| (Fg)
 *     O (Fp)
 *       
 * 
 * Fp (Force of Pendulum)  = Fg (Force of Gravity) * sin(theta)
 * 
 * 
 */

let pendulum;


 function setup(){

  createCanvas(640, 360)

  pendulum =[];



  pendulum.push(new Pendulum( 175, radians(75)));
  // pendulum.push(new Pendulum( 200, radians(80)));
  // pendulum.push(new Pendulum( 225, radians(75)));
  // pendulum.push(new Pendulum( 250, radians(70)));
  // pendulum.push(new Pendulum( 275, radians(65)));
  


 }

 let originalMouseX = 0;
 function mousePressed(){
    pendulum[0].isDragged = true
    originalMouseX = mouseX
 }

 function mouseReleased(){
  pendulum[0].isDragged = false
  pendulum[0].reset()
}

 function draw(){
   background(255)
   for(let i=0;i<pendulum.length;i++){
      let p = pendulum[i]
      p.applyForce()
      p.update()
      p.show()
   }
   
 }


 Pendulum = function( length, theta){

    this.length = length;
    this.origin = createVector(width/2, 0)
    this.bob = createVector(0,0)
    
    this.isDragged = false;
    
    this.location = theta
    this.acceleration = 0;
    this.velocity = 0;

    this.reset = function(){
        this.location = map((mouseX - originalMouseX) , -width , width , -PI/4 , PI/4)
        this.location = constrain(this.location, -PI/2 ,PI/2)
        this.acceleration = 0;
        this.velocity = 0;
    }


    this.applyForce = function(){
        //this.acceleration = gravityConstant * this.mass * sin(theta) / this.mass
        if(!this.isDragged){
          this.acceleration = -0.1 * sin(this.location) / this.length
        }
        
    }


    this.update = function(){
      if(!this.isDragged){
          //simulation of damping
          this.velocity *= 0.999
          this.velocity+=this.acceleration    
          this.location+=this.velocity
          this.acceleration = 0
          
      }else{
        this.reset()
        
      }

      



    }

    this.show = function(){

      //if(!this.isDragged){
      this.bob = createVector(sin(this.location),cos(this.location))
      this.bob.mult(this.length)
      this.bob.add(this.origin)
      //}
      stroke(51)
      fill(51)
   
      line(this.origin.x,this.origin.y , this.bob.x , this.bob.y)
      ellipse(this.bob.x,this.bob.y, 32)

    }


 }