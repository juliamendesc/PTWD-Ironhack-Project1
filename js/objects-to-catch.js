class ObjectsToCatch {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.width = 50;
        this.height = 20;
        this.x = 0;
        this.y = 0;
        this.velocity = 3;
    }
    randomObjectToCatchPosition() {
        this.x = Math.floor(Math.random() * 15) * 50;
        this.y = 0;
      }
    draw(){
        this.context.save();
        this.context.fillStyle = "red";
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.restore();
    }
    movementObjectToCatch() {
        this.y += this.velocity;
    }
    updateCatchArray(){
        for (let i=0; i < this.game.obstaclesToCatchArray.length; i++) {
            this.game.objectsToCatch.movementObjectToCatch();
            if (this.game.obstaclesToCatchArray[i].y + this.game.obstaclesToCatchArray[i].height > 501) {
                this.game.obstaclesToCatchArray.splice(i, 1);
                console.log("splicing object to catch")
            }
            // if (this.game.checkCollision(this.game.player, this.game.obstacle)) {
            //     this.game.scoreArray.push(1);
            //   }
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
}