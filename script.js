let container = document.querySelector(".container");
const body = document.querySelector("body");
const button = document.querySelector("button");
const containerSize = 480;
let size = 16;

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      const squareNumber = i * size + j;
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", "square" + squareNumber);
      const squareSize = containerSize / size + "px";
      square.style.height = squareSize;
      square.style.width = squareSize;
      square.style.opacity = "0.1";
      row.appendChild(square);
    }
    container.appendChild(row);
  }
  container.addEventListener("mouseover", changeColor);
}

function changeColor(event) {
  console.log("in here");
  const target = event.target;
  const id = target.id;
  console.log(id);
  if (id) {
    const square = document.querySelector("#" + id);
    square.style.backgroundColor = "pink";
    console.log(square.style.opacity);
    square.style.opacity = String(parseFloat(square.style.opacity) + 0.1);
  }
}

function changeSize() {
  const newSize = parseInt(prompt("Enter a new size (max 100):"));
  if (newSize <= 100 && newSize % 1 === 0 && newSize > 0) {
    const parent = container.parentNode;
    parent.removeChild(container);
    container = document.createElement("div");
    container.classList.add("container");
    parent.appendChild(container);
    createGrid(newSize);
  }
}

createGrid(size);

button.addEventListener("click", changeSize);
