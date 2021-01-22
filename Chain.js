class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.Chain1 = Constraint.create(options);
        World.add(world, this.Chain1);
    }

    fly(){
    this.Chain1.bodyA=null;
    }

    display(){
        if(this.Chain1.bodyA){
        var pointA = this.Chain1.bodyA.position;
        var pointB = this.pointB;
        
        }
    }
    
}