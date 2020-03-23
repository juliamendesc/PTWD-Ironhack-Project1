class ObjectsToCatch {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this.width = 50;
    this.height = 20;
    this.x = Math.floor(Math.random() * 15) * 50;
    this.y = 0;
    this.velocity = 3;
  }
  draw() {
    this.context.save();
    this.context.fillStyle = "red";
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.restore();
  }
  update() {
    this.y += this.velocity;
    if (this.y + this.height > 520) {
      this.game.obstaclesToCatchArray.splice(0, 1);
      console.log("splicing object to catch");
    }
    // if (this.game.checkCollision(this.game.player, this.game.obstacle)) {
    //     this.game.scoreArray.push(1);
    //   }
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
}