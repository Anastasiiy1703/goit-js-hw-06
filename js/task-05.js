const input = document.querySelector("#name-input");
let span = document.querySelector("#name-output");
input.addEventListener('input', handlerInput);
function handlerInput(event) {
span.textContent = event.currentTarget.value;
   console.log(span);
}