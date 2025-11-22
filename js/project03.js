let timerInterval;
let timerLeft;
let isRanning;

const timerDisplay = document.getElementById('timer');
const StartBtn = document.getElementById('StartBtn');
const StopBtn = document.getElementById('StopBtn');


const startTimer = ((duration) => {
   let timer = duration;

   timerInterval = setInterval(() => {

   const minutes = parseInt(timer / 60, 10);
   const seconds = parseInt(timer % 60, 10);

   const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
   const displaySeconds = seconds < 10 ? '0' + seconds : seconds;

   timerDisplay.innerText = displayMinutes + ':' + displaySeconds;

   if(--timer < 0){
      clearInterval(timerInterval);
      timerDisplay.innerText = 'Breath Out';

      setTimeout(() => {
         timerDisplay.innerText = 'Breath In';
         startTimer(timerLeft);
      }, 3000);
   }
}, 1000);

});

const stopTimer = (() => {
   clearInterval(timerInterval);
   timerDisplay.innerText = 'Breath In';
})

StartBtn.addEventListener('click', () => {
   if(!isRanning){
      timerLeft = 90;
      startTimer(timerLeft);
      isRanning = true;
   }
});

StopBtn.addEventListener('click', () => {
   stopTimer();
});