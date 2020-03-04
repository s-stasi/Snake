var s;
var scl = 20;
var food;
var vel = 2;
var snakeColor;
var pause = true;

snakeColor = prompt('scegli il colore del bruco');
console.log(snakeColor);



function setup() {
  var Canvas = createCanvas(600, 600);
  background(51);
  Canvas.parent('snake');
  s = new snake();
  griglia();
  frameRate(0);
  document.getElementById("button").onclick = function(){
      pause = !pause;
      if(pause == true) {
        frameRate(0);
      }
      else {
        frameRate(vel);
      }
      console.log(pause);
  }
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

  for (var i = 0; i < snake().pezzi.length; i++){
    if(snake().pezzi[i].x == food.x && snake().pezzi[i].y == food.y){
      fill(255, 0, 100);
      rect(food.x, food.y, scl, scl);
    }
  }
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
