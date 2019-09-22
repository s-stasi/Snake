var s;
var scl = 20;
var food;
var vel = 2;
var snakeColor;

snakeColor = prompt('scegli il colore del bruco');
console.log(snakeColor);

function setup() {
  createCanvas(600, 600);
  s = new snake();
  frameRate(2);
  griglia();
}

function draw() {
  background(51);

  if (s.eat(food)){
    griglia();
  }

  s.update();
  s.show();
  s.death();

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function griglia(){
  var col = floor(width/scl);
  var rig = floor(height/scl);
  food = createVector(floor(random(col)), floor(random(rig)));
  food.mult(scl);
}


function keyPressed(){
  if(keyCode === DOWN_ARROW){
    s.dir(0, 1);
  }
  else if(keyCode === UP_ARROW){
    s.dir(0, -1);
  }
  else if(keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }
  else if(keyCode === RIGHT_ARROW){
    s.dir(1, 0);
  }
}
