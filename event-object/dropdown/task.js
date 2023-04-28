let dropValue = document.querySelector('.dropdown__value');
let dropList = document.querySelector('.dropdown__list');
let dropItem = document.querySelectorAll('.dropdown__link');

dropValue.onclick = () => {
    dropList.classList.toggle('dropdown__list_active');
}
function close() {
    dropList.classList.remove("dropdown__list_active");
}
dropItem.forEach(el => {
    el.onclick = () => {
        dropValue.textContent = el.textContent;
        close();
        return false;
    }
})