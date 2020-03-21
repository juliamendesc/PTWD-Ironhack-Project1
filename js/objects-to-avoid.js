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
    // randomObjectToAvoidPosition() {
    //     this.x = Math.floor(Math.random() * 15) * 50;
    //     this.y = 0;
    //   }
    draw(){
        this.context.save();
        this.context.fillStyle = "black";
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.restore();
    }
    movementObjectToAvoid() {
        this.y += this.velocity;
      }
}