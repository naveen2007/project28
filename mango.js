class mango {
    constructor(x,y,r) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
       this.x=x;
       this.y=y;
       this.r=r;
       this.body=Bodies.circle(this.x, this.y, this.r/2, options);
       this.image=loadImage("images/mango.png");
       World.add(world, this.body); 
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      imageMode(CENTER); 
      image(this.image, 0, 0, this.r*2, this.r*2);
      pop();
    }
}