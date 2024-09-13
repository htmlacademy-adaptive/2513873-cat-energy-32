const mainNav = document.querySelector('.main-navigation');
const burger = document.querySelector('.button-burger');

burger.addEventListener('click', ()=> {
  if (mainNav.classList.contains('main-navigation--closed')) {
    burger.classList.remove('button-burger--closed');
    burger.classList.add('button-burger--opened');
    mainNav.classList.remove('main-navigation--closed');
    mainNav.classList.add('main-navigation--opened');
  } else {
    burger.classList.add('button-burger--closed');
    burger.classList.remove('button-burger--opened');
    mainNav.classList.add('main-navigation--closed');
    mainNav.classList.remove('main-navigation--opened');
  }
});
