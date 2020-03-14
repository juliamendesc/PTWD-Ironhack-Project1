// class Game {
//     constructor(canvas) {
//         this.canvas = canvas;
//         this.context = canvas.getContext("2d");
//         this.width = this.canvas.width;
//         this.height = this.canvas.height;
//         this.background = new Image();
//         this.background.src = "images/background.png";
//             }
//     start() {
//         this.draw();

//     }
//     draw() {
//         this.context.drawImage(this.background, 10, 10, 800, 500);
//         this.player.draw();
//     }

// }

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(this);
        this.player.moveLeft();
        this.player.moveRight();
    }
    start() {
        console.log("Game started!");
        this.draw();
    }
    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.player.draw();
    }
}