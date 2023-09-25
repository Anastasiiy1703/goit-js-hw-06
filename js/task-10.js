function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector("#boxes");


function createBoxes(amount) {
  const divs = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    document.divBoxes.appendChild(div);
    divs.push(div);
  }
  return divs;
 console.log(divs);
}

const createdDivs = createBoxes(3); 

// console.log(createdDivs); 

// console.log(divBoxes);
    

