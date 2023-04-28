const tab = Array.from(document.querySelectorAll(".tab"));
const content = Array.from(document.querySelectorAll(".tab__content"));

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", () => {
        const tabActive = document.querySelector(".tab_active");
        const tabActiveContent = document.querySelector(".tab__content_active");

        tabActive.classList.remove("tab_active");
        tabActiveContent.classList.remove("tab__content_active");

        tab[i].classList.add("tab_active");
        content[i].classList.add("tab__content_active");

    })
}
