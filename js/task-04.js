
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const click = document.querySelector("#value");
decrement.addEventListener('click', handlerReduce);
increment.addEventListener('click', handlerIncrease);
let counterValue = 0;
function handlerReduce() {
    counterValue -= 1;
    updateCounterValue();
    console.log(counterValue);
}

function handlerIncrease() {
    counterValue += 1;
    updateCounterValue();
    console.log(counterValue);
}

function updateCounterValue() {
  click.textContent = counterValue;
}
