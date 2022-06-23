const btnMenu = document.querySelector('#btn-menu');
const toggleMenu = document.querySelector('#icon-menu-toggle');

btnMenu.addEventListener('click', ()=> {

    if(toggleMenu.classList.contains('bi-list')){
        toggleMenu.classList.replace('bi-list', 'bi-x-lg')
    } else if(toggleMenu.classList.contains('bi-x-lg')){
        toggleMenu.classList.replace('bi-x-lg', 'bi-list')
    }
});