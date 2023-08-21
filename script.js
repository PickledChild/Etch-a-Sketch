window.addEventListener("load", () => {
  setCanvas(16);
});

//variables
const inpValue = document.querySelector("#canvasValue");
const inpButton = document.querySelector("#inpButton");
const canvas = document.querySelector("#canvasWrap");
const clrPicker = document.getElementById("clrPicker");
const rnbButton = document.getElementById("rnbButton");
const clrButton = document.getElementById("clrButton");
inpValue.defaultValue = 16;

function setCanvas(gridInput) {
  side = Math.ceil(gridInput);
  area = side * side;

  canvas.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${side}, 1fr)`;

  for (let i = 0; i < area; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
    canvas.appendChild(cell);
  }
}

//accepts client input to change canvas size
inpButton.addEventListener("click", () => {
  let newInput = inpValue.value;
  if (newInput <= 0) {
    return alert("Please choose a number between 1 - 100!");
  } else if (newInput > 100) {
    return alert("Please choose a number between 1 - 100!");
  } else if (isNaN(newInput)) {
    return alert("Please choose a number between 1 - 100!");
  } else {
    clearCanvas(canvas);
    setCanvas(newInput);
    console.log(typeof newInput);
  }
});

//clear canvas when page reload/size change; stops overflow;
function clearCanvas(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

//color handling
