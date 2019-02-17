// MENU VARIABLE DECLARATIONS ===============================================>
let menu = document.querySelector('.menu');
let navButtons = document.querySelectorAll('.nav-button')
let navArray = Array.from(navButtons)
let mobileMenu = document.querySelector('.mobile-menu')


// mobile menu JS ========================================================>
mobileMenu.addEventListener('click', () => {
    navArray.forEach(function(button){
        button.style.display = 'block';
        button.style.textAlign = 'right';
        button.style.backgroundColor = '#4c0be8';
    })
})