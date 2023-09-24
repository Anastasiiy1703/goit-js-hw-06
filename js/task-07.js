const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");


input.addEventListener('input', checkInput);
function checkInput(event) {
    const text = event.currentTarget.value;
    span.style.fontSize = `${text}px`;
}

