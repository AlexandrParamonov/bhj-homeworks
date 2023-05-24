const chat = document.querySelector(".chat-widget")
const messages = document.querySelector( '.chat-widget__messages' );
const input = document.querySelector('.chat-widget__input');
const autoScroll = document.querySelector('.chat-widget__messages-container')
let nowTime = new Date().toLocaleTimeString().slice(0, -3);

chat.addEventListener("click", () =>{
    chat.classList.add("chat-widget_active")
});
let messageText = [
    'Добрый день!',
    'Чем не могу помочь?',
    'Хорошего дня',
    'До досвидания',
    'Нет',
    'Все операторы ушли домой',
    'Обратитесь в службу поддержки'
];
function rand(arr) {
    let index = Math.floor(Math.random() * messageText.length);
    return arr[index]
  }
document.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        if (input.value) {
            messages.innerHTML += `<div class="message message_client">
                        <div class="message__time">${nowTime}</div>
                        <div class="message__text">${input.value}</div>
                    </div>
                    `;
				input.value = "";
                messages.innerHTML += `<div class="message">
                <div class="message__time">${nowTime}</div>
                <div class="message__text">
                ${rand(messageText)}
                </div>
            </div>`
        }
     }
     autoScroll.scrollTop = autoScroll.scrollHeight;
});