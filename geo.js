const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,bloco2,bloco3,bloco4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    bloco2 = new Bloco(10,100)
    bloco3 = new Bloco(100,100)
    bloco4 = new Bloco(10,100)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    bloco2.display();
    bloco3.display();
    bloco4.display();
}