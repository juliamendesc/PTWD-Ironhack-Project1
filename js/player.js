class Player {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this.x = game.width / 2.3;
    this.y = game.height - 130;
    this.width = 90;
    this.height = 110;
    this.velocityX = 0;
    this.image = new Image();
    this.image.src = "images/player2.png";
  }
  draw() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
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
    return this.image.width + 5;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.image.height + 5;
  }
 }