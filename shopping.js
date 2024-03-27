let menu = document.querySelector(".ri-menu-3-line");
let navlinks = document.querySelectorAll(".nav-links")
menu.addEventListener('click', ()=>{
    navlinks.classList.toggle('.mobile-menu');
})