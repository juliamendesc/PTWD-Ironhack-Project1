class Background {
    constructor(game) {
      this.game = game;
      this.context = game.context;
      this.x = game.x;
      this.y = game.y;
      this.width = game.width;
      this.height = game.height;
      this.background = new Image()
      this.background.src = "images/background.png";
    }
    draw() {
        this.context.drawImage(this.background, this.x, this.y, this.width, this.height);
    }
}