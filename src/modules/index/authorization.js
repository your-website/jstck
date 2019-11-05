const d = localStorage.getItem("authorized");
const form__submit_login = document.querySelector('.form__submit_login');
const form = document.forms.login;
(function trty() {
    let location = "";
    console.log('123');
    if (window.location.href === "http://localhost:8080/index.html") {
        location = "http://localhost:8080/login.html";
    } else {
        location = "https://your-website.github.io/jstck/login.html";
    }
    if (localStorage.getItem("authorized") === "roman@yandex.ru") {
        console.log(localStorage.getItem("authorized"));
        console.log("yes");
    } else window.location.href = `${location}`;
})();