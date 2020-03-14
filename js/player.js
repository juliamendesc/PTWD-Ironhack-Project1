// class Player {
//     constructor(game) {
//         this.game = game;
//         this.context = game.context;
//         this.x = this.game.width / 2;
//         this.y = this.game.height - 10;
//         this.width = 100;
//         this.height = 200;
//         this.speedX = 0;
//         this.image = new Image();
//         this.image.src= "../images/player.png";
//     }
//     draw() {
//         this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
//     }
// }

class Player {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.x = game.width / 2.3;
        this.y = game.height - 230;
        this.width = 100;
        this.height = 200;
        this.velocityX = 7;
        this.direction = null;
    }
    draw() {
        this.context.save();
        this.context.fillStyle = "pink";
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.restore();
    }
    update() {
        this.x += this.speedX;
        // if (this.x <= 0) {
        //   this.speedX = 0;
        // }
        // if (this.x >= this.game.width - this.width) {
        //   this.speedX = 0;
        // }
      }
    setControls() {
        window.addEventListener("keydown", event => {
          if (event.keyCode === 37) {
            this.speedX = -2;
            console.log("moved left")
          }
          if (event.keyCode === 39) {
            this.speedX = 2;
            (console.log("moved right"))
          }
        });
      }
}