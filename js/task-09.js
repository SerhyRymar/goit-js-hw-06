const body = document.body;
// console.log(body);
const button = document.querySelector(".change-color");
// console.log(button);
const colorName = document.querySelector('.color')
// console.log(colorName);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", () => {
let randomColor = getRandomHexColor()
  body.style.backgroundColor = randomColor;
	colorName.textContent = randomColor;
});


// console.log(getRandomHexColor);
