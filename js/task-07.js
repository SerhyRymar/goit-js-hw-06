const controlInput = document.querySelector("#font-size-control");

console.log(controlInput);
const textInput = document.querySelector("#text");

console.log(textInput);

controlInput.addEventListener("input", function () {
		textInput.style.fontSize = controlInput.value + "px";
	});;

