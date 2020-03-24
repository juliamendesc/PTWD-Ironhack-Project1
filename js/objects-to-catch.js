class ObjectsToCatch {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this.width = 50;
    this.height = 20;
    this.x = Math.floor(Math.random() * 15) * 50;
    this.y = 0;
    this.velocity = 3;
    this.bacon = new Image();
    this.bacon.src = "images/objects to catch/bacon.png";
    this.cake = new Image();
    this.cake.src = "images/objects to catch/bolo.png";
    this.hotDog = new Image();
    this.hotDog.src = "images/objects to catch/cachorro-quente.png";
    this.shrimp = new Image();
    this.shrimp.src = "images/objects to catch/camarao.png";
    this.apple = new Image();
    this.apple.src = "images/objects to catch/maca.png";
    this.ramen = new Image();
    this.ramen.src = "images/objects to catch/macarrao.png";
    this.pizza = new Image();
    this.pizza.src = "images/objects to catch/pizza.png";
    this.objectToCatchArr = [this.bacon, this.cake, this.hotDog, this.shrimp, this.apple, this.ramen, this.pizza];
    this.randomObjectToCatchImage = this.objectToCatchArr[Math.floor(Math.random() * this.objectToCatchArr.length)];
    this.imageWidth = 50;
    this.imageHeight = 50;
  }
  draw() {
    this.context.drawImage(this.randomObjectToCatchImage, this.x, this.y, this.imageWidth, this.imageHeight);

  }
  update() {
    this.y += this.velocity;
    if (this.y + this.height > 520) {
      this.game.obstaclesToCatchArray.splice(0, 1);
    }
    if (this.game.life > 0 && this.game.score % 5 === 0 && this.game.score !== 0) {
      this.velocity += 0.5;
    }
  }
  leftCatch() {
    return this.x;
  }
  rightCatch() {
    return this.x + this.width;
  }
  topCatch() {
    return this.y;
  }
  bottomCatch() {
    return this.y + this.height;
  }
  checkCatchCollision(){
    if (
      this.game.player.left() <= this.rightCatch() &&
      this.game.player.right() >= this.leftCatch() &&
      this.game.player.top() <= this.bottomCatch() &&
      this.game.player.bottom() >= this.topCatch()
    ) {
      this.game.obstaclesToCatchArray.splice(0, 1);
      this.game.score += 1;
      console.log(`Score ${this.game.score}`);
    }
  }
}