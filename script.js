const inpValue = document.querySelector("#canvasValue");
const inpButton = document.querySelector("#inpButton");
const canvas = document.querySelector("#canvasWrap");
inpValue.defaultValue = 16;
gridInput = inpValue.value;

canvas.style.gridTemplateColumns = `repeat(${gridInput}, 1fr)`;
canvas.style.gridTemplateRows = `repeat(${gridInput}, 1fr)`;

function changeInput() {}

inpButton.addEventListener("click", changeInput);
