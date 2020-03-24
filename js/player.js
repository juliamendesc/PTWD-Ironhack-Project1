class Player {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this.x = game.width / 2.3;
    this.y = game.height - 150;
    this.width = 90;
    this.height = 150;
    this.velocityX = 0;
    this.image = new Image();
    this.image.src = "images/scooby-doo-clipart-6.png";
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
    return this.x + this.image.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.image.height;
  }
 }