// Import the page load functions at the top
import { loadHome } from './Home/home.js';
import { loadMenu } from './Menu/menu.js';
import { loadContent } from './Content/content.js';
import "./style.css" ;
import pizzaImg from '../photo/pizza1-removebg-preview.png';
import burgerImg from '../photo/pizza2-removebg-preview.png';
import pastaImg from '../photo/pizza3-removebg-preview.png';
import saladImg from '../photo/sp1.png';
import drinkImg from '../photo/sp2.png';
import dessertImg from '../photo/spagitywithmeat-removebg-preview.png';



// Debugging helper
console.log("index.js loaded - functions available:", {
  loadHome: typeof loadHome,
  loadMenu: typeof loadMenu,
  loadContent: typeof loadContent
});

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded");
  
  const homeButton = document.querySelector('.nav-btnHome');
  const menuButton = document.querySelector('.nav-btnMenu');
  const contentButton = document.querySelector('.nav-btnCont');

  // Debug button selection
  console.log("Buttons found:", { homeButton, menuButton, contentButton });

  // Verify buttons exist before adding listeners
  if (!homeButton || !menuButton || !contentButton) {
    console.error("One or more navigation buttons not found!");
    return;
  }

  // Set home as default
  loadHome();

  // Add event listeners with error handling
  homeButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Home button clicked");
    try {
      loadHome();
    } catch (error) {
      console.error("Error loading home:", error);
    }
  });
  
  menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Menu button clicked");
    try {
      loadMenu();
    } catch (error) {
      console.error("Error loading menu:", error);
    }
  });
  
  contentButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Contact button clicked");
    try {
      loadContent();
    } catch (error) {
      console.error("Error loading contact:", error);
    }
  });

  console.log("Event listeners attached");
});