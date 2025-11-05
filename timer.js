let timeLeft = 10; // 初期値（秒）
const timer = document.getElementById("timer");

const countdown = setInterval(() => {
  timeLeft--;
  timer.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    timer.textContent = "終了！";
    switchToPreSurveyMode();
  }
}, 1000);
