let form = document.forms.register;
let formEmail = form.querySelector('input[type=email]');

let bulleanText = false;
let bulleanEmail = false;
let bulleanTel = false;
let bulleanUrl = false;

export class Validate {
    constructor() {
        this.say = function(pattern, str, errorField, errorValue) {
            if (str.value.match(pattern) === null) {
                document.querySelector(`${errorField}`).textContent = errorValue;
            } else if (str.value.match(pattern)[0].length === str.length) {
                document.querySelector(`${errorField}`).textContent = "";
            } else document.querySelector(`${errorField}`).textContent = errorValue;
        }
    }

    validateEmail(pattern, str) {
        let reg = pattern;
        let val = str;
        let errorField = '.form__error_email';
        let errorValue = "e-mail в формате: sega@yandex.ru";
        this.say(reg, val, errorField, errorValue);
    }

    validateSubmit(pattern) {

    }
}

// function sub() {
//     if (formEmail.checkValidity()) {
//         document.querySelector('.form__button').setAttribute('disabled', false);
//         document.querySelector('.form__button').style.color = "#000";
//         document.querySelector('.form__button').style.backgroundColor = "#ffdb4d";
//     } else {
//         document.querySelector('.form__button').setAttribute('disabled', true);
//         document.querySelector('.form__button').style.color = "rgba(1, 1, 1, .2)";
//         document.querySelector('.form__button').style.backgroundColor = "#b3b3b3";
//     }
// }

const validate = new Validate();

formEmail.addEventListener('input', function (event) {
    validate.validateEmail(formEmail.pattern, event.target);
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
});