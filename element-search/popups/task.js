const main = window.modal_main;
const success = window.modal_success;
const show = document.querySelector(".show-success");
const allClose = document.querySelectorAll("div.modal__close");

main.classList.add("modal_active");

show.onclick = () => {
  main.classList.remove("modal_active");
  success.classList.add("modal_active");
}
allClose.forEach(item => {
  item.onclick = () => {
     item.closest('.modal').classList.remove('modal_active') // удалить
  }
})