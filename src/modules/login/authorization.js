const d = localStorage.getItem("authorized");
const form__submit_login = document.querySelector('.form__submit_login');
const form = document.forms.login;

function checkAuthorized(event) {
    event.preventDefault();
    const name = form.elements.login;
    const password = form.elements.password;

    if (name.value === "roman@yandex.ru" && password.value === "123") {
        console.log("ura");
        localStorage.setItem("authorized", `${name.value}`);
        localStorage.setItem("password", `${password.value}`);
        window.location.href = window.location.href = `${window.location.href}/index.html`;
    } else alert("введите логин: roman@yandex.ru; пароль: 123");
    form.reset();
};

form__submit_login.addEventListener('click', checkAuthorized);



