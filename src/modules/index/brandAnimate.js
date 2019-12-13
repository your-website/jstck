import image_iltani from '../../images/Brand_Iltani.png';
import image_iltani_hover from '../../images/Brand_Iltani_hover.png';

import image_r from '../../images/Brand_R.png';
import image_r_hover from '../../images/Brand_R_hover.png';

import image_izare from '../../images/Brand_Izare.png';
import image_izare_hover from '../../images/Brand_Izare_hover.png';

import image_toys from '../../images/Brand_Toys.png';
import image_toys_hover from '../../images/Brand_Toys_hover.png';

import image_miu from '../../images/Brand_miu.png';
import image_miu_hover from '../../images/Brand_miu_hover.png';

const brand__image_iltani = document.querySelector('.brand__image_iltani');
const brand__image_r = document.querySelector('.brand__image_r');
const brand__image_izare = document.querySelector('.brand__image_izare');
const brand__image_toys = document.querySelector('.brand__image_toys');
const brand__image_miu = document.querySelector('.brand__image_miu');

brand__image_iltani.addEventListener('mouseover', function (event) {
    brand__image_iltani.style.backgroundImage = `url(${image_iltani_hover})`;
});

brand__image_iltani.addEventListener('mouseout', function (event) {
    brand__image_iltani.style.backgroundImage = `url(${image_iltani})`;
});

brand__image_r.addEventListener('mouseover', function (event) {
    brand__image_r.style.backgroundImage = `url(${image_r_hover})`;
});

brand__image_r.addEventListener('mouseout', function (event) {
    brand__image_r.style.backgroundImage = `url(${image_r})`;
});

brand__image_izare.addEventListener('mouseover', function (event) {
    brand__image_izare.style.backgroundImage = `url(${image_izare_hover})`;
});

brand__image_izare.addEventListener('mouseout', function (event) {
    brand__image_izare.style.backgroundImage = `url(${image_izare})`;
});

brand__image_toys.addEventListener('mouseover', function (event) {
    brand__image_toys.style.backgroundImage = `url(${image_toys_hover})`;
});

brand__image_toys.addEventListener('mouseout', function (event) {
    brand__image_toys.style.backgroundImage = `url(${image_toys})`;
});

brand__image_miu.addEventListener('mouseover', function (event) {
    brand__image_miu.style.backgroundImage = `url(${image_miu_hover})`;
});

brand__image_miu.addEventListener('mouseout', function (event) {
    brand__image_miu.style.backgroundImage = `url(${image_miu})`;
});