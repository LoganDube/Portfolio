let lastScrollY = window.scrollY;
const navbar = document.getElementById('main-navbar');


window.addEventListener('scroll', () => {
  if (window.scrollY <= lastScrollY) {
    // Scrolling up
    navbar.style.top = '0';
  } else {
    // Scrolling down
    navbar.style.top = '-80px';
  }
  lastScrollY = window.scrollY;
});