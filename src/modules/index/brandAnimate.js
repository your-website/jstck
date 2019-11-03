const brand__image_iltani = document.querySelector('.brand__image_iltani');
const brand__image_r = document.querySelector('.brand__image_r');
const brand__image_izare = document.querySelector('.brand__image_izare');
const brand__image_toys = document.querySelector('.brand__image_toys');
const brand__image_miu = document.querySelector('.brand__image_miu');

brand__image_iltani.addEventListener('mouseover', function (event) {
    console.log(brand__image_iltani.style.backgroundImage);
    brand__image_iltani.style.backgroundImage = "url(./images/Brand_Iltani_hover.png)";
});

brand__image_iltani.addEventListener('mouseout', function (event) {
    brand__image_iltani.style.backgroundImage = "url(./images/Brand_Iltani.png)";
});

brand__image_r.addEventListener('mouseover', function (event) {
    brand__image_r.style.backgroundImage = "url(./images/Brand_R_hover.png)";
});

brand__image_r.addEventListener('mouseout', function (event) {
    brand__image_r.style.backgroundImage = "url(brand__image_r.png)";
});

brand__image_izare.addEventListener('mouseover', function (event) {
    brand__image_izare.style.backgroundImage = "url(./images/Brand_Izare_hover.png)";
});

brand__image_izare.addEventListener('mouseout', function (event) {
    brand__image_izare.style.backgroundImage = "url(./images/Brand_Izare.png)";
});

brand__image_toys.addEventListener('mouseover', function (event) {
    brand__image_toys.style.backgroundImage = "url(./images/Brand_Toys_hover.png)";
});

brand__image_toys.addEventListener('mouseout', function (event) {
    brand__image_toys.style.backgroundImage = "url(./images/Brand_Toys.png)";
});

brand__image_miu.addEventListener('mouseover', function (event) {
    brand__image_miu.style.backgroundImage = "url(./images/Brand_miu_hover.png)";
});

brand__image_miu.addEventListener('mouseout', function (event) {
    brand__image_miu.setAttribute = "url(./images/Brand_miu.png)";
});