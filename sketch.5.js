/**
 * Gravitational force between celestial bodies : 
 *    F = (G * m1 * m2 * unit r) / (distance * distance)
 *        r = direction between 2 bodies
 *        G = constant
 * 
 */


let circles;
function setup() {
  
  createCanvas(600,400)
  circles = []
  for(let i=0;i<10;i++){
    circles.push(new MyCircle())
  };

  for(let i=0;i<circles.length;i++){
    circles[i].setup();
  }
  
 


}
function draw() {

   background(51)
  
   
  for(let i=0;i<circles.length;i++){
    
    let c = circles[i]
    c.applyForce(createVector(0,5))
    // c.applyForce(createVector(0.02,0))
   
    // Apply Friction!!!
    friction = c.velocity.copy()
    friction.normalize()
    friction.mult(-0.05)
    c.applyForce(friction)
   
    c.update()
   c.edges()
   c.show()
  }

  
  // noLoop()
   
}


 function Body(){
      this.mass;
      this.location ;
      this.velocity ;
      this.accelaration ;

      this.setup = function(){
        this.mass = random(5,10)
        this.location = createVector(width/2 , height/2);
        this.velocity = createVector(0,0);
        this.accelaration = createVector(0,0);
      }


      this.applyForce = function(force) {
        
        this.accelaration.add(p5.Vector.div(force,this.mass));
      }

       this.update = function(){
          this.velocity.add(this.accelaration)
          this.location.add(this.velocity)
          // this.velocity.limit(50)

          this.accelaration.mult(0)

      }
      this.show = function(){
          ellipse(this.location.x, this.location.y, this.mass*5 )
          text(this.mass,this.location.x,this.location.y)
        }

      this.edges = function(){
          if(this.location.x > width){
            this.location.x=width
            this.velocity.x *=-1;
          }
        else
          if(this.location.x <0){
            this.location.x=0
            this.velocity.x *=-1;
          }


    if(this.location.y > height){
      this.location.y = height;
      this.velocity.y*=-1;

    }

      }

}