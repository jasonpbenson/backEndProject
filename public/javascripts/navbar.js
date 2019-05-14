// MENU VARIABLE DECLARATIONS ===============================================>
let menu = document.querySelector('.menu');
let navButtons = document.querySelectorAll('.nav-button')
let navArray = Array.from(navButtons)
let mobileMenuButton = document.querySelector('.mobile-menu-button')


// mobile menu JS ========================================================>
mobileMenuButton.addEventListener('click', () => {
    menu.style.display = "flex";
    navArray.forEach(function(button){
        button.style.display = 'block';
        button.style.padding = '1rem';
        button.style.backgroundColor = '#4c0be8';
    })
    
})

// remove mobile menu/buttons if screen is resized
window.addEventListener("resize", () => {
  if (mobileMenuButton.style.display == "block") {
    // navArray.forEach(function(button) {
    //   button.style.display = "none";
    // });
  }
});