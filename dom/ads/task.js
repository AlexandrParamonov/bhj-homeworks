const rotatorItem = Array.from(document.querySelectorAll(".rotator__case"));
const span = document.querySelector("span");

let showrotator = rotatorItem.findIndex(el => {
    el.classList.contains("rotator__case_active");
});
const remove = () => {
    rotatorItem.forEach(el => el.classList.remove("rotator__case_active"));
}
const add = (i) => {
    rotatorItem[i].classList.add("rotator__case_active");
    let colorWord = rotatorItem[i].getAttribute("data-color");
    rotatorItem[i].style.color = colorWord;
   // const sv =  rotatorItem[i].getAttribute("data-speed");
   // console.log(sv)
}
//test
setInterval( () => {
    remove()
    if (showrotator === rotatorItem.length - 1) {
        showrotator = 0;
    } else {
        showrotator++;
    }
    add(showrotator);
 }, 1000);
