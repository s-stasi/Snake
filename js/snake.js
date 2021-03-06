function snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.pezzi = [];

  this.update = function(){
    for (var i = 0; i < this.pezzi.length - 1; i++){
      this.pezzi[i] = this.pezzi[i + 1];
    }
    if (this.total >= 1){
      this.pezzi[this.total - 1] = createVector(this.x, this.y);
    }

    this.x += this.xspeed*scl;
    this.y += this.yspeed*scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);

  }

  this.show = function(){
    if (snakeColor === 'rosso'){
      fill(red);
    }else if (snakeColor === 'random' || snakeColor === 'casuale'){
      fill(random(255), random(255), random(255));
    }else {
      fill(snakeColor);
    }

    for (var i = 0; i < this.pezzi.length; i++){
      rect(this.pezzi[i].x, this.pezzi[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }

  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1){
      if(vel < 10){
      frameRate(vel++);
    }
      this.total++;
      return true;
    }
    else {
      return false;
    }
  }

  this.death = function () {
    for (var i = 0; i < this.pezzi.length; i++) {
      var pos = this.pezzi[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        vel = 2;
        console.log("hai perso");
        this.total = 0;
        this.pezzi = [];
	      frameRate(2);
      }
    }
  }

  this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  }
}
