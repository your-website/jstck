const d = localStorage.getItem("authorized");
const form__submit_registration = document.querySelector('.form__submit_registration');
const form = document.forms.registration;

function checkAuthorized(event) {
    event.preventDefault();
    const name = form.elements.name;
    const email = form.elements.email;
    const password = form.elements.password;
    const checkbox = form.elements.checkbox;

    if (email.value === "roman@yandex.ru" && password.value === "123" && checkbox.value === "on") {
        localStorage.setItem("authorized", `${name.value}`);
        localStorage.setItem("password", `${password.value}`);
        window.location.href = `/index.html`;
    } else alert("введите e-mail: roman@yandex.ru; пароль: 123");
    form.reset();
};

form__submit_registration.addEventListener('click', checkAuthorized);



