// src/index.js
import './style.css';  // Import your CSS
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// On initial load, show the Home tab
loadHome();

// Add event listeners for the nav buttons
const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('about');

homeButton.addEventListener('click', () => {
  loadHome();
});

menuButton.addEventListener('click', () => {
  loadMenu();
});

contactButton.addEventListener('click', () => {
  loadContact();
});
