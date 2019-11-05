const d = localStorage.getItem("authorized");
const form__submit_login = document.querySelector('.form__submit_login');
const form = document.forms.login;
console.log(location);

function checkAuthorized(event) {
    event.preventDefault();
    const name = form.elements.login;
    const password = form.elements.password;
    let location = "";

    if (window.location.href === "http://localhost:8080/login.html") {
        location = "http://localhost:8080/index.html";
    } else {
        location = "https://your-website.github.io/jstck/index.html";
    }
    console.log(location);
    if (name.value === "roman@yandex.ru" && password.value === "123") {
        console.log("ura");
        localStorage.setItem("authorized", `${name.value}`);
        localStorage.setItem("password", `${password.value}`);
        window.location.href = `${location}`;
    } else alert("введите логин: roman@yandex.ru; пароль: 123");
    form.reset();
};

form__submit_login.addEventListener('click', checkAuthorized);



