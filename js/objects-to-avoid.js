class ObjectsToAvoid {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this.width = 50;
    this.height = 50;
    this.x = Math.floor(Math.random() * 15) * 50;
    this.y = 0;
    this.velocity = 2;
    this.increaseVelocity = 1;
    this.boot = new Image();
    this.boot.src = "images/objects to avoid/sapatos.png";
    this.fish = new Image();
    this.fish.src = "images/objects to avoid/espinhapeixe.png";
    this.trash = new Image();
    this.trash.src = "images/objects to avoid/trash.png";
    this.poison = new Image();
    this.poison.src = "images/objects to avoid/veneno.png";
    this.virus = new Image();
    this.virus.src = "images/objects to avoid/virus.png";
    this.objectToAvoidArr = [
      this.boot,
      this.fish,
      this.trash,
      this.poison,
      this.virus
    ];
    this.randomObjectToAvoidImage = this.objectToAvoidArr[
      Math.floor(Math.random() * this.objectToAvoidArr.length)
    ];
  }
  draw() {
    this.context.drawImage(
      this.randomObjectToAvoidImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update() {
    this.y += this.velocity;
    if (this.y + this.height > 520) {
      this.game.obstaclesToAvoidArray.splice(0, 1);
    }
    if (
      this.game.life > 0 && this.game.score !== 0 &&
      this.game.score >= 5 && this.game.score < 10
    ) {
      this.velocity = 3;
      console.log("VELOCITY 3", this.velocity);
      return this.velocity;
    }
    if (
      this.game.life > 0 && this.game.score !== 0 &&
      this.game.score >= 10 && this.game.score < 15
    ) {
      this.velocity = 4;
      console.log("VELOCITY 4", this.velocity);
      return this.velocity;
    }
    if (
      this.game.life > 0 && this.game.score !== 0 &&
      this.game.score >= 15 && this.game.score < 20
    ) {
      this.velocity = 5;
      console.log("VELOCITY 5", this.velocity);
      return this.velocity;
    }
    if (
      this.game.life > 0 && this.game.score !== 0 &&
      this.game.score >= 20 && this.game.score < 25
    ) {
      this.velocity = 6;
      console.log("VELOCITY 6", this.velocity);
      return this.velocity;
    }
    if (
      this.game.life > 0 && this.game.score !== 0 &&
      this.game.score >= 25 && this.game.score <= 30
    ) {
      this.velocity = 7;
      console.log("VELOCITY 6", this.velocity);
      return this.velocity;
    }
   }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  checkAvoidCollision() {
    if (
      !(
        this.game.player.bottom() < this.top() ||
        this.game.player.top() > this.bottom() ||
        this.game.player.right() < this.left() ||
        this.game.player.left() > this.right()
      )
    ) {
      this.game.obstaclesToAvoidArray.splice(0, 1);
      this.game.life -= 1;
    }
  }
}