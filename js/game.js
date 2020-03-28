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
      this.gameOverImg = new Image();
      this.gameOverImg.src = "images/player-game_over.png";
      this.gameWonImage = new Image();
      this.gameWonImage.src = "images/scooby_shaggy.png";
      this.backgroundWinImg = new Image();
      this.backgroundWinImg.src = "images/backgroundWin.jpg";
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
      this.frame = 0;
      this.gameSound = new Audio();
      this.gameSound.src = "images/SnackTime.mp3";
      this.scaredToDeath = new Audio();
      this.scaredToDeath.src = "images/ScaredtoDeath.mp3";
      this.grandFinale = new Audio();
      this.grandFinale.src = "images/GrandFinale.mp3";
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
      this.frame++;
      this.drawEverything();
      this.lifeUpdate();
      this.endGame();
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
      // if (this.level === 50) {
      //   this.gameWon();
      // }
    }
    animation(timestamp) {
      // now you are assignig the animation id to the requested animation frame
      // this timestamp and also the animationId will increase since the function keeps on calling itself over and over again
      // to see and understand this uncomment this console log:
    //   console.log("Timestamp: ", timestamp, "AnimationId: ", this.animationId);
      this.animationId = window.requestAnimationFrame(timestamp => {
        this.animation(timestamp);
      });
      if (this.life > 0 && this.score % 5 === 0 && this.score !== 0) {
        this.level++;
        this.drawEverything(timestamp);
      } else if (this.life > 0 && this.level < 7) {
        this.drawEverything(timestamp);
      } else if (this.level === 7) {
        this.gameWon();
      } else if (this.life === 0) {
        this.end = true;
        this.gameOver();
      }
      // as the animation is always called it calls updateEverything() which in turn calls drawEverything()
      this.updateEverything();
      console.log(`Level ${this.level}`);
      console.log(`Score ${this.score}`);
    }
    // levelUp() {
    //   this.level += 1;
    //   console.log('level up');
    // }
    lifeUpdate(){
      if (this.life == 0) {
        return this.end = true;
      }
    }
     //game ends
    endGame() {
      if (this.end == true) {
        this.gameSound.pause();
        this.gameSound.currentTime = 0;
        this.scaredToDeath.play();
        window.cancelAnimationFrame(this.animationId);
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.drawImage(this.gameOverImg, 550, 140, this.gameOverImg.width / 2, this.gameOverImg.height/ 2);
        this.context.fillStyle = "white";
        this.context.font = "75px monogram";
        this.context.fillText("GAME OVER", 80, 200);
        this.context.font = "50px monogram";
        this.context.fillText(`Score: ${this.score}`, 85, 285);
        this.context.font = "40px monogram";
        this.context.fillText("Try again? Press Enter!", 85, 335);
      }
    }
    gameWon() {
      this.gameSound.pause();
      this.gameSound.currentTime = 0;
      this.grandFinale.play();
      window.cancelAnimationFrame(this.animationId);
      this.context.drawImage(this.backgroundWinImg, 0, 0, this.width, this.height);
      this.context.drawImage(this.gameWonImage, 225, 250, this.gameWonImage.width, this.gameWonImage.height );
      this.context.fillStyle = "black";
      this.context.font = "75px monogram";
      this.context.fillText("YOU MADE IT!", 80, 190);
      this.context.font = "50px monogram";
      this.context.fillText(`Score: ${this.score}`, 85, 250);
    }
    reset() {
      this.scaredToDeath.pause();
      this.scaredToDeath.currentTime = 0;
      this.grandFinale.pause();
      this.grandFinale.currentTime = 0;
      this.player = new Player(this);
      this.controls.setControls();
      this.obstaclesToAvoidArray = [];
      this.obstaclesToCatchArray = [];
      this.end === false;
      this.frame = 0;
      this.scoreArray = 0;
      this.score = 0;
      this.level = 1;
      this.velocity = 3;
      this.life = 5;
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
      this.reset();
      this.animation();
      this.gameSound.play();
    }
  }

