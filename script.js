window.addEventListener("load", () => {
  setCanvas(16);
});

const inpValue = document.querySelector("#canvasValue");
const inpButton = document.querySelector("#inpButton");

function setCanvas(gridInput) {
  const canvas = document.querySelector("#canvasWrap");

  side = Math.ceil(Math.sqrt(gridInput));

  canvas.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${side}, 1fr)`;

  for (let i = 0; i < gridInput; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.appendChild(cell);
  }
}

inpButton.addEventListener("click", () => {
  gridInput.textContent = newInput;
  console.log(newInput);
});
