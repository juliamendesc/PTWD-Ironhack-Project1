class ObjectsToAvoid {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.width = 50;
        this.height = 20;
        this.x = 0;
        this.y = 0;
        this.velocity = 3;
    }
    randomObjectToAvoidPosition() {
        this.x = Math.floor(Math.random() * 15) * 50;
        this.y = 0;
      }
    draw(){
        this.context.save();
        this.context.fillStyle = "black";
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.restore();
    }
    movementObjectToAvoid() {
        this.y += this.velocity;
    }
    updateAvoidArray(){
        for (let i=0; i < this.game.obstaclesToAvoidArray.length; i++) {
            this.game.objectsToAvoid.movementObjectToAvoid();
            if (this.game.obstaclesToAvoidArray[i].y + this.game.obstaclesToAvoidArray[i].height > 501) {
                this.game.obstaclesToAvoidArray.splice(i, 1);
                console.log("splicing object to avoid")
            }
            // if (this.game.checkCollision(this.game.player, this.game.obstacle)) {
            //     this.game.end = "true";
            // }
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