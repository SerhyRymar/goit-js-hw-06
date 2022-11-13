
const loginRef = document.querySelector(".login-form");

console.log(loginRef);

loginRef.addEventListener('submit', loginForm)

function loginForm(event) {
    event.preventDefault();

    const forms = event.currentTarget.elements;
    const email = forms.email.value;
    const password = forms.password.value;

    if (email.length === 0 || password.length === 0) {
        alert('Внесіть дані');
        return;
    }

    const formData = {
        email, password,
    };

    console.log(formData);

    loginRef.reset();

}


