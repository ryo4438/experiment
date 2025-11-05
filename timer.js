  let timeLeft = 10; // 初期値（秒）
  const timer = document.getElementById("timer");
  let countdown = null; // カウントダウン用の変数を外に宣言

  // ======== タイマーを開始する関数 ========
  function startTimer() {
    // 表示初期化
    timeLeft = 10;
    timer.textContent = timeLeft;

    // 既存のカウントが動いていたら一旦停止
    if (countdown) clearInterval(countdown);

    // 1秒ごとにカウントダウン
    countdown = setInterval(() => {
      timeLeft--;
      timer.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(countdown);
        timer.textContent = "終了！";
        changeDisplay(); // 次の画面に遷移（必要に応じて削除可）
      }
    }, 1000);
  }
