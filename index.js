const burgerButton = document.getElementById('burger');
const closeButton = document.getElementById("close");
const mobileNav = document.querySelector(".mobile-nav");

burgerButton.addEventListener("click",()=>{
    mobileNav.style.display="flex";

    
})

closeButton.addEventListener("click", ()=>{
    mobileNav.style.display="none";


})