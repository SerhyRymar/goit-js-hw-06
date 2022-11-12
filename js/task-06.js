const textInput = document.querySelector("#validation-input");
console.log(textInput);

const textInputLength = Number(textInput.dataset.length);
console.log(textInputLength);

textInput.addEventListener('blur', () => {
    if (textInput.value.length === textInputLength) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else 
        textInput.classList.add("invalid");
}); 
