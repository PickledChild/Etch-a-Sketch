window.addEventListener("load", () => {
  setCanvas(16);
});

const inpValue = document.querySelector("#canvasValue");
const inpButton = document.querySelector("#inpButton");
const canvas = document.querySelector("#canvasWrap");

function setCanvas(gridInput) {
  side = Math.ceil(Math.sqrt(gridInput));
  area = side * side;

  canvas.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${side}, 1fr)`;

  for (let i = 0; i < area; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.appendChild(cell);
  }
}

inpButton.addEventListener("click", () => {
  let newInput = Number(inpValue.value);
  if (newInput <= 0) {
    return alert("Please choose a number between 1 - 100!");
  }
  if (newInput > 100) {
    return alert("Please choose a number between 1 - 100!");
  }
  if (newInput == NaN) {
    return alert("Please choose a number between 1 - 100!");
  }
  clearCanvas(canvas);
  setCanvas(newInput);
  console.log(newInput);
});

function clearCanvas(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
