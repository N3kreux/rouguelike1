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
        output += "%c@"; // player
      } else if (x === exit.x && y === exit.y) {
        output += "%c>"; // exit
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

    // Check if player reached exit
    if (player.x === exit.x && player.y === exit.y) {
      alert("YOU ESCAPED… OR DID YOU?");
      // Later: replace alert with corrupted/glitchy effect
    }
  }

  render();
});

render();

let exit = { x: 5, y: 3 }; // example position