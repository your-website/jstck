const form__submit_registration = document.querySelector('.form__submit_registration');
const form = document.forms.registration;
console.log('123');
function checkAuthorized(event) {
    event.preventDefault();
    const email = form.elements.email;
    const password = form.elements.password;
    let location = "";

    if (location === "http://localhost:8080/registration.html") {
        location = "http://localhost:8080/index.html";
    } else {
        location = "https://your-website.github.io/jstck/index.html";
    }

    if (email.value === "roman@yandex.ru" && password.value === "123") {
        localStorage.setItem("authorized", `${email.value}`);
        localStorage.setItem("password", `${password.value}`);
        window.location.href = `${location}`;
    } else alert("введите e-mail: roman@yandex.ru; пароль: 123");
    form.reset();
};
form__submit_registration.addEventListener('click', checkAuthorized);



