function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const click = document.querySelector(".change-color");
const bodyElement = document.querySelector("body");
const span = document.querySelector(".color");

click.addEventListener('click', changeColor);
function changeColor() {
  bodyElement.style.backgroundColor = getRandomHexColor();
span.textContent = getComputedStyle(bodyElement).backgroundColor;

}

