const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,
block10,block11,block12,block13,block14,block15,block16,block17,block18,
block19,block20,block21,block22,block23,block24,block25;
var ground,grounds1,grounds2;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(400,500,800,40)
block1 = new Blocks()
block2= new Blocks()
block3= new Blocks()
block4= new Blocks()
block5= new Blocks()
block6= new Blocks()
block7= new Blocks()
block8= new Blocks()
block9= new Blocks()
block10= new Blocks()
block11= new Blocks()
block12= new Blocks()
block13= new Blocks()
block14= new Blocks()
block15= new Blocks()
block16= new Blocks()
block17= new Blocks()
block18= new Blocks()
block19= new Blocks()
block20= new Blocks()
block21= new Blocks()
block22= new Blocks()
block23= new Blocks()
block24= new Blocks()
block25= new Blocks()


Engine.run(engine);

}

function draw() {
  background("pink");  
rectMode(CENTER)

ground.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block17.display()
block18.display()
block19.display()
block20.display()
block21.display()
block22.display()
block23.display()
block24.display()
block25.display()



  drawSprites();
}