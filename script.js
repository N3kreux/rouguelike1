const game = document.getElementById("game");

let player = { x: 2, y: 2 };

let map = [
  ['#','#','#','#','#','#','#'],
  ['#','.','.','.','.','.','#'],
  ['#','.','.','.','.','.','#'],
  ['#','.','.','.','.','.','#'],
  ['#','#','#','#','#','#','#']
];

function render() {
  let output = "";

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (x === player.x && y === player.y) {
        output += "@";
      } else {
        output += map[y][x];
      }
    }
    output += "\n";
  }

  game.textContent = output;
}

document.addEventListener("keydown", (e) => {
  let newX = player.x;
  let newY = player.y;

  if (e.key === "w") newY--;
  if (e.key === "s") newY++;
  if (e.key === "a") newX--;
  if (e.key === "d") newX++;

  if (map[newY][newX] !== "#") {
    player.x = newX;
    player.y = newY;
  }

  render();
});

render();