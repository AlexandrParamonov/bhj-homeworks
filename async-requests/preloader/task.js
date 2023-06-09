const items = document.getElementById("items");
const animation = document.getElementById('loader');
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = "json";
xhr.onload = () => {
    let valute = xhr.response.response.Valute;
    for (let i in valute){
        items.insertAdjacentHTML("afterbegin", `
        <div class="item__code">
        ${valute[i].CharCode}
                </div>
                <div class="item__value">
                    ${valute[i].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>`)
    }
    animation.classList.remove("loader_active");
}
xhr.send();