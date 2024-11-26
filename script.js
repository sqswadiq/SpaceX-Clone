
// to hamburgen view

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".custom-toggle");
    const navMenu = document.querySelector(".side-menu-main"); // Optional: If you want to toggle a menu
  
    hamburger.addEventListener("click", () => {
      // Toggle the 'hamburger-active' class on the button itself
      hamburger.classList.toggle("hamburger-active");
  
      // Optionally toggle a class on your menu
      if (navMenu) {
        navMenu.classList.toggle("active");
      }
    });
  });
  



//navigatiopn hiding when scroll


let lastScrollTop = 0; // Store the last scroll position
const navbar = document.querySelector('.navbar'); // Select the navbar

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // User is scrolling down
    navbar.style.top = '-80px'; // Hide the navbar (adjust the value based on navbar height)
  } else {
    // User is scrolling up
    navbar.style.top = '0'; // Show the navbar
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});