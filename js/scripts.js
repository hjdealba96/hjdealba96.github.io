/*!
 * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */

window.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');

    function toggleDarkMode(state) {
        document.body.classList.toggle('dark-mode', state);
        toggle.setAttribute('aria-label', state ? 'Switch to light mode' : 'Switch to dark mode');
    }

    // Determine initial state: saved preference > default dark
    const saved = localStorage.getItem('darkMode');
    const useDark = window.matchMedia('(prefers-color-scheme: dark)');
    let darkModeState = saved !== null ? saved === 'true' : true;

    // Follow OS changes when no manual preference is saved
    useDark.addEventListener('change', (evt) => {
        if (localStorage.getItem('darkMode') === null) {
            darkModeState = evt.matches;
            toggleDarkMode(darkModeState);
        }
    });

    toggleDarkMode(darkModeState);

    toggle.addEventListener('click', () => {
        darkModeState = !darkModeState;
        localStorage.setItem('darkMode', darkModeState);
        toggleDarkMode(darkModeState);
    });

    // Bootstrap scrollspy
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    document.querySelectorAll('#navbarResponsive .nav-link').forEach((navLink) => {
        navLink.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
