const timer = document.getElementById('timer');
const interval = setInterval(() => {
   if (timer.textContent == 0) {
      alert('Вы победили в конкурсе!');
      clearInterval(interval);
   }
   if (timer.textContent > 0) {
      timer.textContent--;
   }
}, 1000);