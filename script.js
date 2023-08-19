//grid set up
const gridContainer = document.querySelector("#canvasWrap");

const gridBase = document.createElement("div");
let gridCount = 16;

for (let i = 0; i < gridCount; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = "hi";
  gridContainer.appendChild(cell);
}
