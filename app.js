let second = document.querySelector('#sec')
let mint = document.querySelector('#mint')
let hour = document.querySelector('#hour')
let startBtn = document.querySelector('.startBtn')


let sec;
let minute;
let hours;
let startInterval;

sec = 0;
minute = 0;
hours = 0;


function start() {
   
   startInterval = setInterval(function() {
    sec ++
    second.innerHTML = sec
    startBtn.disabled = true;
    
    

   if (sec > 59) {
      sec = 0;
       minute ++
       mint.innerHTML = minute
       
      } 
   else if (minute > 60) {
      minute = 0;
       hours ++
       hour.innerHTML = hours
       
      } 
   },1000)
   
}

function stop() {
    clearInterval(startInterval);
    startBtn.disabled = false;
}

function reset() {

    clearInterval(startInterval)
        sec = 0;
        second.innerHTML = 0;
        mint.innerHTML = 0;
        hour.innerHTML = 0;
}

const m = 20;
console.log(m);



