const sliderItem = Array.from(document.querySelectorAll(".slider__item"));
const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");

let showItem = sliderItem.findIndex(el => {
    el.classList.contains('slider__item_active')
});
const remove = () => {
    sliderItem.forEach(el => el.classList.remove("slider__item_active"));
}
const add = (i) => {
    sliderItem[i].classList.add("slider__item_active");
}
next.onclick = () => {
    remove()
    if (showItem === sliderItem.length - 1) {
        showItem = 0;
    } else {
        showItem++;
    }
    add(showItem);
}
prev.onclick = () => {
    remove();
    if (showItem === 0) {
        showItem = sliderItem.length - 1;
    } else {
        showItem--;
    }
    add(showItem);
}