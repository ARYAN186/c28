class Chain{
    constructor(bodya,pointb){
        var options = {
            bodyA: bodya,
           pointB: pointb,
            stiffness: 0.09,
            length: 10
        }
        this.pointB=pointb;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA=null;
    }

    display(){
        if(this.chain.bodyA!=null){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}