class roof{
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,700,30,options);
        this.width = 700;
        this.height = 30;

    World.add(world,this.body); 
    };
    display(){
        var pos = this.body.position;
        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        

    }
}