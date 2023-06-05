const hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach(el =>{
    const tTip = document.createElement("div");
    tTip.textContent = el.title;
    el.addEventListener("click", event =>{
        event.preventDefault();
        tTip.classList.add('tooltip');
        el.insertAdjacentElement("beforebegin", tTip)
        tTip.style.left = `${el.getBoundingClientRect().left}px`;
        tTip.style.top = `${el.getBoundingClientRect().bottom}px`;
        tTip.classList.toggle('tooltip_active');
    })
})