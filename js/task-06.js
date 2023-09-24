const input = document.querySelector("#validation-input");
input.style.border = "2px solid #bdbdbd";
input.addEventListener('blur', checkInput);
function checkInput(event) {
    const name = event.currentTarget.value
    if (name.length == input.dataset.length) {
        input.style.borderColor = "#4caf50";
    }
    else {
        input.style.borderColor = "#f44336";
    }
}

console.log(input);