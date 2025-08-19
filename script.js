function toggleMenu(){
    const hamburger = document.querySelector(".js-hamburger");
    const menuLinks = document.querySelector(".js-menu-links");
    hamburger.classList.toggle("open");
    menuLinks.classList.toggle("open");
}