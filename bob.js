class bob{
    constructor(x,y){
        var options = {
           'restitution': 0.8,
            'density' : 0.7,
            'friction' : 1.0
           // isStatic: true
        };
        this.body = Bodies.circle(x,y,70,options)
        this.radius = 70;

        World.add(world,this.body)
    }
    
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("red")
        ellipse(0,0,this.radius,this.radius);
        pop();
       
    }
  
   
}
