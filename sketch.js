
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {

  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;


  //adc propriedades físicas da bola 
  var ball_options = {
    //saltitar- quanto maior mais saltitante a bola será
    restitution: 0.95,
    //atrito do ar - quanto maior mais lento será o movimento da bola
    frictionAir: 0.01
  }

  var ball2_options = {
    restitution: 0.5,
    frictionAir: 0.01
  }

  var rectagle_options = {
    restitution: 1.5,
    frictionAir: 0.01
  }

  var rectagle2_options = {
    restitution: 1.3,
    frictionAir: 0.01
  }

  var ground_options = {
    isStatic: true
  };

  var ground2_options = {
    isStatic: true
  }

  //criando a bola e adc ao mundo 
  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(300, 10, 30, ball2_options);
  World.add(world, ball2);

  rectangle = Bodies.rectangle(180, 50, 50, 40, rectagle_options);
  World.add(world, rectangle);

  rectangle2 = Bodies.rectangle(30, 50, 50, 90, rectagle2_options);
  World.add(world, rectangle2);

  ground = Bodies.rectangle(90, 390, 400, 20, ground_options);
  World.add(world, ground);

  ground2 = Bodies.rectangle(300, 290, 2, 2, ground2_options);
  World.add(world, ground2);

  ellipseMode(RADIUS);
  rectMode(CENTER);
  
};


function draw() {
  background('gray');

  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);
  ellipse(ball2.position.x, ball2.position.y, 30);

  rect(rectangle.position.x, rectangle.position.y, 40, 40);
  rect(rectangle2.position.x, rectangle2.position.y, 40, 100);

  rect(ground.position.x, ground.position.y, 400, 20);
  rect(ground2.position.x, ground.position.y, 200, 200);

  fill('red');
}

