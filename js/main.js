const canvas = document.querySelector("#myCanvas");
const game = new Game(canvas);

window.addEventListener("keydown", event => {
  if (event.keyCode === 13) {
    game.start();
  }
});