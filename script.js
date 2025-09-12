let totalSeconds = 0;  
let remaining = totalSeconds;
let timerId = null;

function updateDisplay() {
  let mins = Math.floor(remaining / 60);
  let secs = remaining % 60;
  document.getElementById("display").textContent =
    String(mins).padStart(2, '0') + ":" + String(secs).padStart(2, '0');
}

function startTimer() {
  if (timerId || remaining <= 0) return;
  timerId = setInterval(() => {
    remaining--;
    updateDisplay();
    if (remaining <= 0) {
      clearInterval(timerId);
      timerId = null;
      alert("Time’s up!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  remaining = totalSeconds;
  updateDisplay();
}

function setTime() {
  let mins = parseInt(document.getElementById("mins").value) || 0;
  let secs = parseInt(document.getElementById("secs").value) || 0;
  totalSeconds = mins * 60 + secs;
  remaining = totalSeconds;
  updateDisplay();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// init display
updateDisplay();