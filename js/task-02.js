const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector("#ingredients");
const markup = [];
ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.className = "item";
  markup.push(li)
})
container.append(...markup)
console.log(container);



