class Player {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this.x = game.width / 2.3;
    this.y = game.height - 180;
    this.width = 100;
    this.height = 150;
    this.velocityX = 0;
    // this.direction = null;
  }
  draw() {
    this.context.save();
    this.context.fillStyle = "blue";
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.restore();
  }
  update() {
    this.x += this.velocityX;
    if (this.x <= 0) {
      this.velocityX = 0;
    }
    if (this.x >= this.game.width - this.width) {
      this.velocityX = 0;
    }
  }
  left() {
    return this.x;
  }

  right() {
    return this.x + this.image.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.image.height;
  }
 }