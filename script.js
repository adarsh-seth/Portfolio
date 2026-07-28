let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');
let navlinks = document.querySelectorAll('.navbar a');

menuIcon.addEventListener("click" , (event) => {
     menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
})

document.addEventListener("click" , (event) => {
    if( !navbar.contains(event.target) && !menuIcon.contains(event.target)){
        navbar.classList.remove('active')
        menuIcon.classList.remove('bx-x')
    }
})

navlinks.forEach((link) => {
    link.addEventListener("click" , (event) =>{
         navbar.classList.remove('active')
        menuIcon.classList.remove('bx-x')
    })
})




