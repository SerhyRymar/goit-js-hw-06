const body = document.body;
// console.log(body);
const button = document.querySelector(".change-color");
// console.log(button);
const colorName = document.querySelector('.color')
// console.log(colorName);

button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
	colorName.textContent = getRandomHexColor();
});

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor);
