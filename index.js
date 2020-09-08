const navLinks = document.querySelector('ul');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const hamburgerBtn = document.querySelector('.hamburger-btn');
let isOpen = false;


hamburger.addEventListener('click', () => {
    if (!isOpen) {
        hamburgerBtn.classList.add('open');
        navLinks.classList.add('navbar-open');
        nav.style.height = "185px";
        isOpen = true;
    } else {
        hamburgerBtn.classList.remove('open');
        navLinks.classList.remove('navbar-open');
        isOpen = false;
        nav.style.height = "0px";
    }
})

navLinks.addEventListener('click', () => {
    hamburgerBtn.classList.remove('open');
    navLinks.classList.remove('navbar-open');
    isOpen = false;
    if (window.innerWidth < 720) {
        nav.style.height = "0px";
    }
})

removeNavbarOpenClass = () => {
    // Get the width of the screen
    let screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        hamburgerBtn.classList.remove('open');
        navLinks.classList.remove('navbar-open');
        nav.style.height = "auto";
        isOpen = false;
    }
}
window.addEventListener('resize', removeNavbarOpenClass);

