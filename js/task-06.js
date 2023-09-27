const input = document.querySelector("#validation-input");
input.addEventListener('blur', checkInput);
function checkInput(event) {
    const inputValue = event.currentTarget.value;
    const expectedLength = parseInt(input.dataset.length);

    if (inputValue.length === expectedLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}

console.log(input);








