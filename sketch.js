const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground1;
var log1, log2, log3, log4;
var pig1, pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1= new Ground(600,390,1200,20);

    box1 = new Box(700,320,70,70);
    box2= new Box(920,320,70,70);
    pig1= new Pig(810,320);
    log1=new Log(810,300,300,PI/2);

    box3 = new Box(700,220,70,70);
    box4= new Box(920,220,70,70);
    pig2= new Pig(810,220);
    log2=new Log(810,200,300,PI/2);

    box5 = new Box(810,120,70,70);
    log3=new Log(760,120,150,PI/6);
    log4=new Log(860,120,150,PI/10);

    bird=new Bird(100,100);

    
    //pig2=

}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();
   
    box5.display();
    log3.display(); 
    log4.display();

    bird.display();
}

