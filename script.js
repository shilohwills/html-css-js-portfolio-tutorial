const hamburger = document.getElementById('hamburger');
const menuLinks = document.getElementById('menu-links');

hamburger.addEventListener('click', () => {
  // Toggle menu visibility
  menu-links.classList.toggle('active');
  
  // Toggle hamburger animation
  hamburger.classList.toggle('active');
});