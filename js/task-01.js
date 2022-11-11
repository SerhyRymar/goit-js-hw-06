// Розписуємо код:

// Шукаємо всі елементи 
const numberOfCategories = document.querySelectorAll("li.item");

console.log("Number of categories:", numberOfCategories.length);

// // Категорія animals
// const animal = numberOfCategories[0].firstElementChild;
// const animals = animal.nextElementSibling;

// console.log("Category:", animal.textContent);
// console.log("Elements:", animals.children.length);

// // Категорія Products
// const product = numberOfCategories[1].firstElementChild;
// const products = product.nextElementSibling;

// console.log("Category:", product.textContent);
// console.log("Elements:", products.children.length);

// // Категорія Technologies
// const technology = numberOfCategories[2].firstElementChild;
// const technologies = technology.nextElementSibling;

// console.log("Category:", technology.textContent);
// console.log("Elements:", technologies.children.length);

// Скорочуємо код 
function divisionByCategories(categoryNumber) {
    const nameOfCategory = categoryNumber.nextElementSibling;
    console.log("Category:", categoryNumber.textContent);
    console.log("Elements:", nameOfCategory.children.length);
}
divisionByCategories(numberOfCategories[0].firstElementChild);
divisionByCategories(numberOfCategories[1].firstElementChild);
divisionByCategories(numberOfCategories[2].firstElementChild);