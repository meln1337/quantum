const icon = document.getElementsByClassName('menu-btn')[0];
const menu = document.getElementsByClassName('right__top__header')[0];

let clickCount = 0;

icon.addEventListener('click', () => {
    icon.classList.toggle('menu-btn_active');
    if (clickCount % 2 === 0) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
    clickCount++;
})