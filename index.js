const burgerButton = document.getElementById('burger');
const closeButton = document.getElementById('close');
const mobileNav = document.querySelector('.mobile-nav');
const logo = document.getElementById('logo');
const link = document.querySelector('.nav-link');

burgerButton.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
  logo.style.display = 'none';
  burgerButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  logo.style.display = 'block';
  burgerButton.style.display = 'block';
});

link.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  logo.style.display = 'block';
  burgerButton.style.display = 'block';
});