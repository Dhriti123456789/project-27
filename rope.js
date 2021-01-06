class rope{
    constructor(body1,body2,offsetX,offsetY){
       this.offsetX = offsetX
       this.offsetY = offsetY
       var options = {
           bodyA : body1,
           bodyB : body2,
           pointB : {x:this.offsetX ,y:this.offsetY}
       }
       this.rope = constraint.create(options)
       World.add(world,this.rope);
    }
   display(){
      var pos = this.rope.bodyA.position;
      var position = this.rope.bodyB.position;
      var pointA = pos.x;
      var a3 = pos.y;
      var a1 = position.x + this.offsetX;
      var a2 = position.y + this.offsetY;
      strokeWeight(10);
      line(pointA,a3,a1,a2);
   }
}











