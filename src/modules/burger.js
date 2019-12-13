export {burgerEvent};

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuContainer = document.querySelector('.header__container');
const links = document.querySelectorAll('.header__link');
const lines = document.querySelectorAll('.header__line');

function burgerClick() {
    // Toggle Navigation
    menu.classList.toggle('header__menu_active');
    menuContainer.classList.toggle('header__container_active');

    // Animate links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else link.style.animation = `menuFade 0.5s ease forwards ${index / 7}s`;
    });

    // Burger Animation
    lines[0].classList.toggle('header__line_one');
    lines[1].classList.toggle('header__line_two');
    lines[2].classList.toggle('header__line_three');
};

const burgerEvent = burger.addEventListener('click', burgerClick);