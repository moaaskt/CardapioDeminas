// script.js
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

document.querySelector('header').addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
