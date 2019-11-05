import eyeOpen from '../../images/eye-open.svg';
import eyeClose from '../../images/eye-close.svg';

let form = document.forms.registration;
let formPassword = form.querySelector('input[type=password]');

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

function checkStylePassword() {
    if (formPassword.checkValidity()) {
        document.querySelector('.form__input_password').style.border = "1px solid #0069af";
        document.querySelector('.form__label_login-password').style.color = "#0069af";
        document.querySelector('.form__input_password').style.background = `url(${eyeOpen}) no-repeat 3px 1px`;
        document.querySelector('.form__input_password').style.backgroundPosition = "right 13px top 13px";
        document.querySelector('.form__input_password').style.color = "#000000";
    } else {
        document.querySelector('.form__input_password').style.border = "1px solid red";
        document.querySelector('.form__label_login-password').style.color = "red";
        document.querySelector('.form__input_password').style.background = `url(${eyeClose}) no-repeat 3px 1px`;
        document.querySelector('.form__input_password').style.backgroundPosition = "right 15px top 20px";
        document.querySelector('.form__input_password').style.color = "red";
    }
}

const validate = new Validate();

formPassword.addEventListener('input', function (event) {
    validate.validatePassword(formPassword.pattern, event.target);
    checkStylePassword();
});
