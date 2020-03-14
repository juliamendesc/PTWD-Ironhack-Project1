const canvas = document.querySelector("canvas");
const game = new Game(canvas);

window.addEventListener("keypress", event => {
  if (event.keyCode === 13) {
    game.start();
  }
});