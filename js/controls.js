class Controls {
    constructor(game) {
      this.game = game;
      this.player = this.game.player
    }
    setControls() {
      window.addEventListener('keydown', event => {
        event.preventDefault();
        switch (event.keyCode) {
          //LEFT
          case 37:
            this.game.player.velocityX = -5
            break;
            //RIGHT
          case 39:
            this.game.player.velocityX = 5
            break;
            //UP
        }
      })
      window.addEventListener('keyup', event => {
        event.preventDefault();
        switch (event.keyCode) {
          //LEFT
          case 37:
            this.game.player.velocityX = 0
            break;
            //RIGHT
          case 39:
            this.game.player.velocityX = 0
            break;
            //UP
        }
      })
    }
  }