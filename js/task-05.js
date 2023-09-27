const input = document.querySelector("#name-input");
let span = document.querySelector("#name-output");
input.addEventListener('input', handlerInput);
function handlerInput(event) {
   if (event.currentTarget.value === "") {
      span.textContent = "Anonymous";
   }
   else
      span.textContent = event.currentTarget.value;
}
 console.log(span);
