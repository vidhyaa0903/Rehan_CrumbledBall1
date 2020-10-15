class Ball{
    constructor() {
        var options = {
          isStatic:false,
          restitution:0.3,
          friction:4,
          density:3
        }
         this.body = Bodies.circle(100 ,100 ,10 ,options);
         World.add(world, this.body);
      }
      keyPressed(){
        if(keyCode === UP_ARROW){
           Matter.Body.applyForce(ball.body,ball.body.position,{x:2,y:-2});
           
           }
         }
   
      display(){
        var pos =this.body.position;
        push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255 ,0 ,255)
			ellipse(0 ,0 ,30 , 30);
			pop()
        
        
  }
}