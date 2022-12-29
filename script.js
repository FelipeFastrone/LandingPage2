const buttonOpen = document.querySelector('.open-menu');
const buttonClose = document.querySelector('close-menu');


const openMenu = () => {
    buttonOpen.innerHTML.style.display = 'hidden';

}
const closeMenu = () => {
    
}

buttonOpen.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);