

const categories = document.querySelector("#categories");
const categoryItems = [...categories.children];

console.log("Number of categories:", categoryItems.length);

categoryItems.forEach((categoryItem) => {
  const categoryName = categoryItem.children;
  console.log("Category:", categoryName[0].textContent);
  console.log("Elements:", categoryName[1].children.length);
});