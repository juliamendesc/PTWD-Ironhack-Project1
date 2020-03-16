class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(this);
        this.controls = new Controls(this);
        this.controls.setControls();
    
        // this.end = false;
    }

     drawEverything(timestamp)  {
         this.context.clearRect(0, 0, this.width, this.height);
         this.player.draw();
         this.updateEverything(timestamp)
        const animation = window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));
        if (this.end) {
        window.cancelAnimationFrame(animation);
        }
    }

    updateEverything() {
        this.player.update();
    }

    animation(timestamp) {
        this.drawEverything();
        this.updateEverything(timestamp);
    }

    //  //game ends
    // endGame() {
    //     // this.score.highScore();
    //     this.end = true;

    // }

    start() {
        console.log("Game started!");
        this.drawEverything();
    }
}