let timer = document.getElementById('timer');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let interval;
let seconds = 0;

function startTimer() {
    clearInterval(interval);
    interval = setInterval(() => {
        seconds++;
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds - (hrs * 3600)) / 60);
        let secs = seconds % 60;
        timer.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    timer.textContent = '00:00:00';
}

function pad(val) {
    return val < 10 ? '0' + val : val;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
