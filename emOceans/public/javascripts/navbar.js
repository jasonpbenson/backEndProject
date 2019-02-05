// function myNav(){
//     let x = document.querySelector(".menu");
//     if(x === active/hover){
//         // navbar: "active";
//     } else {
//         // nabvar: "hidden";
//     }
// }
let menu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger');
// function toggleMenu() {
//     let menuClassArray = [].slice.call(menu.classList)
//     if(menuClassArray.includes('active')){  //used include instad of className because there are too many classes
//         // menuClassArray.remove('active');
//         menuClassArray = "hidden";
        
//     }else{
//         menuClassArray.add('active');   //THis is the function for it to work but we still have tell it when to do this.
//     }
//  }

 hamburger.addEventListener('click', ()=>{
     menu.classList.toggle('active')
    })   //THis is the function for it to work but we still have tell it when to do this.);
 
 