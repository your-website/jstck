const d = localStorage.getItem("authorized");
const form__submit_login = document.querySelector('.form__submit_login');
const form = document.forms.login;

(function trty() {
    if (localStorage.getItem("authorized") === "roman@yandex.ru") {
        console.log(localStorage.getItem("authorized"));
        console.log("yes");
    } else window.location.href = window.location.href = `${window.location.href}/login.html`;
})();
