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

  // Toggles the "dark-mode" class based on if the media query matches
function toggleDarkMode(state) {
    checkToggle(state);

    const hasClass = document.body.classList.contains("dark-mode");
    
    if (state) {
      if (!hasClass) {
        document.body.classList.add("dark-mode");
      }

    } else {
      if (hasClass) {
        document.body.classList.remove("dark-mode");
      }
    }
  }

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
let darkModeState = useDark.matches;

// Listen for changes in the OS settings
// addListener is used because older versions of Safari don't support addEventListener
useDark.addListener(function(evt) {
    toggleDarkMode(evt.matches);
});

// Initial setting depending on the prefers-color-mode
  toggleDarkMode(true);

  function switchListener() {
    darkModeState = !darkModeState;
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