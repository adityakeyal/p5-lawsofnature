/**
 * Gravitational force between celestial bodies : 
 *    F = (G * m1 * m2 * unit r) / (distance * distance)
 *        r = direction between 2 bodies
 *        G = constant
 * 
 */


let circles;
let g_constant = 1

function setup() {
  
  createCanvas(600,400)
  circles = []
  for(let i=0;i<2;i++){
    circles.push(new Sattelite())
  };

  for(let i=0;i<circles.length;i++){
    circles[i].setup();
  }
  
 


}
function draw() {

   background(51)
  
   

  // for(let i=0;i<circles.length;i++){

      //calculate gravity

      let i =0;

      for(let j=0;j<circles.length;j++){
          if(i!=j){
              //calculate the force

              //force = G * m1* m2 * (r) / d2

              let r = p5.Vector.sub(circles[j].location , circles[i].location)
              let d = r.mag()
              d = constrain(d, 5, 20)
              r.normalize()
              
                let cons = g_constant * circles[i].mass * circles[j].mass / (d*d)
                let gravity = r.mult(cons)
                circles[i].applyForce(gravity)
              

          }


      // }

  }


  for(let i=0;i<circles.length;i++){
    
    let c = circles[i]
   
    c.update()
    c.edges()
    c.show()
  }

  
  // noLoop()
   
}


 function Sattelite(){

      this.mass;
      this.location ;
      this.velocity ;
      this.accelaration ;

      this.setup = function(){
        this.mass = int(random(5,20))
        this.location = createVector(random(width) , random(height/4,height/2));
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