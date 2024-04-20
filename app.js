const burgerIcon = document.querySelector('.burger-icon-wrapper');
const navMenu = document.querySelector('.nav-menu');
burgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    burgerIcon.classList.toggle('opacity');
})