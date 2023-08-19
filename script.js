//grid set up
const gridContainer = document.querySelector("#canvasWrap");
let cellCount = 30;
const area = 25000;

function columnNum() {
  let cellArea = area / cellCount;
  let column = Math.ceil(Math.sqrt(cellArea));
  return column;
}

const gridBase = document.createElement("div");

for (let i = 0; i < cellCount; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  gridContainer.appendChild(cell);
}

console.log(columnNum());
