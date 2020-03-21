class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(this);
        this.controls = new Controls(this);
        this.objectsToAvoid = new ObjectsToAvoid(this);
        this.controls.setControls();
        this.obstaclesToAvoidArray = [];
    
        // this.end = false;
    }

     drawEverything(timestamp)  {
        this.context.clearRect(0, 0, this.width, this.height);
        for (let obstacle of this.obstaclesToAvoidArray) {
            objectsToAvoid.draw();
        }
        this.player.draw();
        this.objectsToAvoid.draw();
        this.updateEverything(timestamp)
        const animation = window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));
        if (this.end) {
        window.cancelAnimationFrame(animation);
        }
    }

    updateEverything() {
        this.player.update();
        if (this.frame % 120 === 0) {
            this.obstaclesToAvoidArray.push(new Obstacles(this));
        }
        this.objectsToAvoid.movementObjectToAvoid();
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
        this.animation();
    }
}