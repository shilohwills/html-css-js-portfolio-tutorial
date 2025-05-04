function toggleMenu() {
  const hamburger = document.querySelector('.js-hamburger');
const menuLinks = document.querySelector('.js-menu-links');

hamburger.addEventListener('click', () => {
  menuLinks.classList.toggle('open');
  });
}