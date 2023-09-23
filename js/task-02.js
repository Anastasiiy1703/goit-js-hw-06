const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector("#ingredients");
ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.className = "item";
  container.append(li)
 
})

console.log(container);









