const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('isActive');
  menu.classList.toggle('isOpen');
});

