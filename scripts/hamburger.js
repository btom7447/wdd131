document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.querySelector('header nav');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    hamburgerMenu.addEventListener('click', function() {
        nav.classList.toggle('open');

        if (nav.classList.contains('open')) {
            hamburgerIcon.textContent = '✕'; 
        } else {
            hamburgerIcon.textContent = '☰';
        }
    });
});