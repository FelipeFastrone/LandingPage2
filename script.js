const buttonOpen = document.querySelector('.open-menu');
const buttonClose = document.querySelector('close-menu');

buttonOpen.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);

function openMenu() {
    document.body.classList.add('menuActive');
}
function closeMenu() {
    document.body.classList.remove('menuActive')
}

openMenu();
closeMenu();
