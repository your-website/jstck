let form = document.forms.register;
let formEmail = form.querySelector('input[type=email]');
let formPassword = form.querySelector('input[type=password]');


let bulleanText = false;
let bulleanEmail = false;
let bulleanTel = false;
let bulleanUrl = false;

export class Validate {
    constructor() {
        this.say = function(pattern, str, errorField, errorValue) {
            console.log(str.value.match(pattern));
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

    validatePassword(pattern, str) {
        let reg = pattern;
        let val = str;
        let errorField = '.form__error_password';
        let errorValue = "Введен неверный пароль";
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

function checkStylePassword() {
    if (formPassword.checkValidity()) {
        document.querySelector('.form__input_password').style.border = "1px solid red";
        document.querySelector('.form__label_login-password').style.color = "red";
    } else {
        document.querySelector('.form__input_password').style.border = "1px solid red";
        document.querySelector('.form__label_login-password').style.color = "red";
    }
}

const validate = new Validate();

formEmail.addEventListener('input', function (event) {
    validate.validateEmail(formEmail.pattern, event.target);
});

formPassword.addEventListener('input', function (event) {
    validate.validatePassword(formPassword.pattern, event.target);
    checkStylePassword();
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
});