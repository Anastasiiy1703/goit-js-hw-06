const form = document.querySelector(".login-form");
form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const data = {
        email: email.value,
        password: password.value
    }
        if (!email.value || !password.value) {
            alert("Всі поля повинні бути заповнені!")
        }

    console.log(data);
    event.currentTarget.reset();
}

