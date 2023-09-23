
const category = document.querySelector("#categories");
const categoryArray = [...category.children];
categoryArray.forEach((element) => {
console.log("Number of categories: ", categoryArray.length);
})
 

categoryArray.forEach((item) => {
    let itemNumber = item.children;
    console.log("Category:", itemNumber[0].textContent);
    console.log("Elements:", itemNumber[1].children.length);
})
