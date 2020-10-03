const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, ball;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof(400, 200, 400, 30);
  ball = new Ball(200, 300, 40, 40);
  ball1 = new Ball(300, 300, 40, 40);
  ball2 = new Ball(400, 300, 40, 40);
  ball3 = new Ball(500, 300, 40, 40);
  ball4 = new Ball(600, 300, 40, 40);

  Engine.run(engine);

  var options = {
    bodyA: roof.body,
    bodyB: ball.body,
    stiffness: 0.05,
    lenth: 10,
  };
  var chain = Constraint.create(options);
  World.add(world, chain);

  var options = {
    bodyA: roof.body,
    bodyB: ball2.body,
    stiffness: 0.05,
    lenth: 10,
  };
  var chain = Constraint.create(options);
  World.add(world, chain);
  var options = {
    bodyA: roof.body,
    bodyB: ball3.body,
    stiffness: 0.05,
    lenth: 10,
  };
  var chain = Constraint.create(options);
  World.add(world, chain);
  var chain = Constraint.create(options);
  World.add(world, chain);
  var options = {
    bodyA: roof.body,
    bodyB: ball4.body,
    stiffness: 0.05,
    lenth: 10,
  };

  function draw() {
    rectMode(CENTER);
    background("blue");

    drawSprites();
    roof.display();
    ball.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();

    strokeWeight(3);
    line(
      roof.body.position.x,
      roof.body.position.y,
      ball.body.position.x,
      ball.body.position.y
    );
    line(
      roof.body.position.x,
      roof.body.position.y,
      ball2.body.position.x,
      ball2.body.position.y
    );
    line(
      roof.body.position.x,
      roof.body.position.y,
      ball3.body.position.x,
      ball3.body.position.y
    );
    line(
      roof.body.position.x,
      roof.body.position.y,
      ball4.body.position.x,
      ball4.body.position.y
    );
  }
}
