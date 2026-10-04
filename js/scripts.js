/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    const switcher = document.querySelector("input");


// Checks & unchecks the switcher
function checkToggle(check) {
    switcher.checked = check;
}

  // Toggles the "dark-mode" class and persists the choice
function toggleDarkMode(state) {
    checkToggle(state);
    document.body.classList.toggle("dark-mode", state);
  }

// Determine initial state: saved preference > OS preference > default dark
const saved = localStorage.getItem("darkMode");
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
let darkModeState = saved !== null ? saved === "true" : true;

// Listen for changes in the OS settings (only when no saved preference)
useDark.addEventListener("change", function(evt) {
    if (localStorage.getItem("darkMode") === null) {
      darkModeState = evt.matches;
      toggleDarkMode(darkModeState);
    }
});

// Apply initial state
  toggleDarkMode(darkModeState);

  function switchListener() {
    darkModeState = !darkModeState;
    localStorage.setItem("darkMode", darkModeState);
    toggleDarkMode(darkModeState);
  }

  // Listen for switch change
  switcher.addEventListener("change", switchListener);

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});