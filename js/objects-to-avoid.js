class ObjectsToAvoid {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.width = 50;
        this.height = 20;
        this.x = Math.floor(Math.random() * 15) * 50;
        this.y = 0;
        this.velocity = 3;
        this.boot = new Image();
        this.boot.src = "images/objects to avoid/boot.jpg";
        this.fish = new Image();
        this.fish.src = "images/objects to avoid/espinha.png";
        this.tin = new Image();
        this.tin.src = "images/objects to avoid/lata.png";
        this.poison = new Image();
        this.poison.src = "images/objects to avoid/poison.png";
    }
    draw(){
        this.context.save();
        this.context.fillStyle = "black";
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.restore();
    }
    update() {
      this.y += this.velocity;
      if (this.y + this.height > 520) {
        this.game.obstaclesToAvoidArray.splice(0, 1);
      }
      // if (this.game.checkCollision(this.game.player, this.game.obstacle)) {
      //     this.game.end = "true";
      // }
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