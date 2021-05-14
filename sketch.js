const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,395,1200,10);
 rock= new Rock(1000, 370);
 cart1 = new cart(50, 170, 100, 100);
 cart2 = new cart(180, 170, 100, 100);
 cart3= new cart(310, 170, 100, 100);
 cart4 = new cart(440, 170, 100, 100);
 cart5 = new cart(570, 170, 100, 100);
 cart6 = new cart(700, 170, 100, 100);
 ct1= new ct(cart1.body, cart2.body);
 ct2= new ct(cart2.body, cart3.body);
 ct3= new ct(cart3.body, cart4.body);
 ct4= new ct(cart4.body, cart5.body);
 ct5= new ct(cart5.body, cart6.body);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
rock.show();
cart1.show();
 cart2.show();
 cart3.show();
 cart4.show();
 cart5.show();
 cart6.show();
 ct1.show();
 ct2.show();
 ct3.show();
 ct4.show();
 ct5.show();
 collision=Matter.SAT.collides(cart6.body, rock.body);
 if(collision.collided){
   flag=1
 }
 if(flag===1){
   textSize(30);
   fill("blue")
   text("CRASHED", 500, 200);
 }
  }

  function keyPressed(){
    if(keyCode===RIGHT_ARROW){
      Matter.Body.applyForce(cart6.body, {x:cart6.body.position.x, y:cart6.body.position.y}, {x:7.5, y:0})
      //trainSound.play();
    }
  }

  
