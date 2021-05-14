class Rock{
constructor(x,y){
    var options={
    isStatic:false
    }
    this.body=Bodies.rectangle(x, y, 120, 120, options);
    World.add(myWorld, this.body);
    this.image=loadImage("images/rock.png");
}
show(){
    imageMode(CENTER)
 image(this.image, this.body.position.x, this.body.position.y, 120, 120);

}
}