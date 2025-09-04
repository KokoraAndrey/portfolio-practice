
const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const page = document.querySelector('.page');
const menuItem = document.querySelectorAll('.header__link')

burgerButton.addEventListener('click', () => {
  page.classList.toggle('stopScroll')
  burgerButton.classList.toggle('isActive');
  menu.classList.toggle('isOpen');
});

menuItem.forEach(el => {
  el.addEventListener('click', () => {
    page.classList.remove('stopScroll')
    burgerButton.classList.remove('isActive');
    menu.classList.remove('isOpen');
  })
})
