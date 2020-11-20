class Rope{
    constructor(body1,body2,offsetx,offsety){
        this.offsetx=this.offsetx
        this.offsety=this.offsety
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetx,y:this.offsetY},
            length: 1,
            stiffness: 0.04
        }
        
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var ptA = this.chain.bodyA.position;
        var ptB = this.chain.bodyB.position;
        line(ptA.x,ptA.y,ptB.x,ptB.y);
    }
}