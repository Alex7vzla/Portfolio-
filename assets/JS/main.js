let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.about,.skills,.services,.portfolio,.contact,.copyright',{delay:50, origin:'bottom'});