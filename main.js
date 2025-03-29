//! elementi catturati
let navbar= document.querySelector(".navbar");


//? Evento scroll
window.addEventListener("scroll",
//     function(){
//     let scroll = window.scrollY;
//     if(scroll > 0){
//         navbar.classList.add("navbar-scroll");
//     }else{
//         navbar.classList.remove("navbar-scroll");
//     }
// }
()=>{

if(window.scrollY > 0){
    navbar.style.height="10vh";
} else{
    navbar.style.height="13vh";

}}

)