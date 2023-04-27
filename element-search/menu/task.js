const menuLink = document.getElementsByClassName('menu__link');
for (let i = 0; i < menuLink.length; i++) {
    const menu = menuLink[i];
    const sub = menu.closest(".menu__item").querySelector(".menu_sub");
    menu.onclick = () => {
        if (sub) {
            sub.classList.toggle("menu_active");
            return false;
        }
    }
}
