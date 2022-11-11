const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Шукаємо наш список

const listUl = document.querySelector('#ingredients');

// Створюємо та додаемо нові елемнту у список

const newEl = ingredients.map(ingredient => {
  const originEl = document.createElement("li");
  originEl.classList.add('item');
  originEl.textContent = ingredient;
  return originEl;
});

console.log(newEl);
listUl.append(...newEl);

