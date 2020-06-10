/* **************** Navbar  **************** */

const Button = document.querySelector('#menu');
const navLinks = document.querySelector('.hide-menu');


function toggleBtn(){
    const navBar = document.querySelector('.fa-bars');

    if(navLinks.classList.contains('hide-menu')){
        navLinks.classList.remove('hide-menu');
       // navBar.classList.add('d-none');
    } else{
        navLinks.classList.add('hide-menu');
       // navBar.classList.remove('d-none');
    }
}

Button.addEventListener('click', toggleBtn);
/* ****************** End of Navbar **************** */