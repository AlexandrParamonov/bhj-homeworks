
const quantityCntrl = document.querySelectorAll('.product__quantity-control');
const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');
const cartBtn = Array.from(document.querySelectorAll('.product__add'));
const productValue = Array.from(document.querySelectorAll('.product__quantity-value'));

quantityCntrl.forEach(el => {
    el.addEventListener('click', () => {
        if(el.classList.contains('product__quantity-control_dec')) {
           el.nextElementSibling.innerText <= 1 ? el.nextElementSibling.innerText = 1 : el.nextElementSibling.innerText--;
        }
        if(el.classList.contains('product__quantity-control_inc')) {
            el.previousElementSibling.innerText++;
        }
    });
    });
    cartBtn.forEach(el => {
        el.addEventListener('click', () => {
            let index = cartBtn.indexOf(el);
            let value = productValue[index].textContent;
            let dataId = product[index].dataset.id;
            let image = product[index].children[1].getAttribute("src");
            let cartProduct = Array.from(cartProducts.children);
            const products = cartProduct.find((item) => item.dataset.id === dataId);
         if (!products) {
           cartProducts.insertAdjacentHTML(
             "afterBegin",
             `<div class="cart__product" data-id=${dataId}>
             <img class="cart__product-image" src=${image}>
             <div class="cart__product-count">${value}</div>
             </div>`
           );
         } else {
           let count = products.querySelector('.cart__product-count');
           let newCount = Number(count.textContent) + Number(value);
           count.innerText = newCount;
         }
        });
    });