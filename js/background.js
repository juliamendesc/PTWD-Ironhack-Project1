class Background {
    constructor(game) {
      this.game = game;
      this.context = game.context;
      this.x = game.x;
      this.y = game.y;
      this.width = game.width;
      this.height = game.height;
      this.backgroundImg = new Image();
      this.backgroundImg.src = "images/background.png";
    }
    draw() {
      this.context.drawImage(this.backgroundImg, this.x, this.y, this.width, this.height);
    }
}