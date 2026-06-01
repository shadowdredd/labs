// Бургер меню для мобільних
const burger = document.getElementById('burger');
const navList = document.getElementById('navList');

burger.addEventListener('click', function() {
  navList.classList.toggle('open');
});