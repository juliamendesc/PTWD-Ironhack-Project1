class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d");
      this.width = canvas.width;
      this.height = canvas.height;
      this.player = new Player(this);
      this.controls = new Controls(this);
      this.objectsToAvoid = new ObjectsToAvoid(this);
      this.objectsToCatch = new ObjectsToCatch(this);
      this.controls.setControls();
      this.obstaclesToAvoidArray = [];
      this.obstaclesToCatchArray = [];
      this.end = false;
      // here you initiate the animationId (or loop)
      this.animationId;
      this.scoreArray = 0;
    }
  
    drawEverything() {
      // here you only draw
      this.context.clearRect(0, 0, this.width, this.height);
      // you loop through the obstracles Array and draw each of them
      this.obstaclesToAvoidArray.map(obstacle => {
        obstacle.draw();
      });
      this.obstaclesToCatchArray.map(obstacle => {
        obstacle.draw();
      });
      this.player.draw();
    }
  
    updateEverything() {
      this.drawEverything();
      if (this.animationId % 100 === 0) {
        console.log("pushing Obstacle");
        this.obstaclesToAvoidArray.push(new ObjectsToAvoid(this));
        console.log(this.obstaclesToAvoidArray);
        this.obstaclesToCatchArray.push(new ObjectsToCatch(this));
        console.log(this.obstaclesToCatchArray);
      }
      this.player.update();
      for (let obstacle of this.obstaclesToAvoidArray) {
        obstacle.update();
      }
      for (let obstacle of this.obstaclesToCatchArray) {
        obstacle.update();
      }
      //   this.objectsToAvoid.updateAvoidArray();
      // this.objectsToCatch.update();
    }
  
    animation(timestamp) {
      // now you are assignig the animation id to the requested animation frame
      // this timestamp and also the animationId will increase since the function keeps on calling itself over and over again
      // to see and understand this uncomment this console log:
    //   console.log("Timestamp: ", timestamp, "AnimationId: ", this.animationId);
      this.animationId = window.requestAnimationFrame(timestamp =>
        this.animation(timestamp)
      );
      // as the animation is always called it calls updaupdateEverything() which in turn calls drawEverything()
      this.updateEverything();
      if (this.end) {
        window.cancelAnimationFrame(animation);
      }
    }
   checkCollisions(object) {
    if (
      this.player.left() < object.right() &&
      this.player.right() > object.left() &&
      this.player.top() < object.bottom() &&
      this.player.bottom() > object.top()
    ) {
      return true;
    }
  }
    //  //game ends
    // endGame() {
    //     // this.score.highScore();
    //     this.end = true;
  
    // }
  
    start() {
      console.log("Game started!");
      // you only need to call animation here since this will initiate the update and draw function
      this.animation();
    }
  }