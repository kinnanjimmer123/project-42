class Drop {

  constructor(x, y,radius) {
      var options={
       restitution: 0.1,
       friction: 0.001
    };
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    
    World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    fill("blue");
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, this.radius,this.radius);
  }
   update(){
     if(this.body.position.y>400){
        Matter.Body.setPosition(this.body,{x: random(0,400),
        y: random(-10,0)
        });
      }
   }
}
