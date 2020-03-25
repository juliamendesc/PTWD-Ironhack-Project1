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
      this.heartImage = new Image();
      this.heartImage.src = "images/heart.webp";
      this.controls.setControls();
      this.obstaclesToAvoidArray = [];
      this.obstaclesToCatchArray = [];
      this.end = false;
      // here you initiate the animationId (or loop)
      this.animationId;
      this.scoreArray = 0;
      this.life = 5;
      this.score = 0;
      this.level = 1;
      this.velocity = 3;
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
      this.drawScore();
      this.drawLives();
    }
  
    updateEverything() {
      this.drawEverything();
      if (this.animationId % 100 === 0) {
        this.obstaclesToAvoidArray.push(new ObjectsToAvoid(this));
        this.obstaclesToCatchArray.push(new ObjectsToCatch(this));
      }
      this.player.update();
      for (let obstacle of this.obstaclesToAvoidArray) {
        obstacle.update();
        obstacle.checkAvoidCollision();
      }
      for (let obstacle of this.obstaclesToCatchArray) {
        obstacle.update();
        obstacle.checkCatchCollision();
      }
      if (this.life === 0) {
        this.end = true;
        // this.endGame();
      } 
    }
  
    animation(timestamp) {
      // now you are assignig the animation id to the requested animation frame
      // this timestamp and also the animationId will increase since the function keeps on calling itself over and over again
      // to see and understand this uncomment this console log:
    //   console.log("Timestamp: ", timestamp, "AnimationId: ", this.animationId);
      this.animationId = window.requestAnimationFrame(timestamp => {
        this.animation(timestamp);
      });
      // as the animation is always called it calls updaupdateEverything() which in turn calls drawEverything()
      this.updateEverything();
    }
    levelUp() {
      this.level += 1;
      this.score += 1;
      this.updateObjectSpeedLevel();
      console.log('level up');
    }

     //game ends
    endGame() {
        window.cancelAnimationFrame();
        // alert("GAME OVER!");
        // alert(`Your final score is ${this.score}`);
        console.log ("you lost!")
    }
    drawScore() {
    this.context.font = "16px Verdana";
    this.context.fillStyle = "#FFFFFF";
    this.context.fillText("Score: "+ this.score, 10, 30);
    }

    drawLives() {
      this.context.font = "16px Verdana";
      this.context.fillStyle = "#FFFFFF";
      if (this.life === 5) {
      this.context.drawImage(this.heartImage, 665, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
      this.context.drawImage(this.heartImage, 690, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
      this.context.drawImage(this.heartImage, 715, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
      this.context.drawImage(this.heartImage, 740, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
      this.context.drawImage(this.heartImage, 765, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
    } else if (this.life === 4) {
      this.context.drawImage(this.heartImage, 690, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
      this.context.drawImage(this.heartImage, 715, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
      this.context.drawImage(this.heartImage, 740, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
      this.context.drawImage(this.heartImage, 765, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
    } else if (this.life === 3) {
      this.context.drawImage(this.heartImage, 715, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
      this.context.drawImage(this.heartImage, 740, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
      this.context.drawImage(this.heartImage, 765, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
    } else if (this.life === 2) {
      this.context.drawImage(this.heartImage, 740, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
      this.context.drawImage(this.heartImage, 765, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
    } else if (this.life === 1) {
      this.context.drawImage(this.heartImage, 765, 10, this.heartImage.width * 0.05, this.heartImage.height * 0.05);
    } 
  }
  
    start() {
      console.log("Game started!");
      // you only need to call animation here since this will initiate the update and draw function
      this.animation();
    }
  }