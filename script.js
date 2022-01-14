let score = 0;
let time = 20;
let firstTime = true;
let gameEnded = false;
function imgclicked() {
    if (gameEnded) return;
    if (firstTime) {
        setInterval(decreaseTime, 1000);
        firstTime = false;
    }
    score++;
    let scoreText = document.getElementById("text");
    scoreText.innerHTML = "Score: " + score.toString();
    let img = document.getElementById("loeki");
    img.setAttribute("draggable", false);
    img.style.top =
        Math.floor(Math.random() * (window.innerHeight - 200)).toString() +
        "px";
    img.style.left =
        Math.floor(Math.random() * (window.innerWidth - 200)).toString() + "px";
}

function decreaseTime() {
    time--;
    if (time <= 0) endGame();
    let timeText = document.getElementById("time");
    timeText.innerHTML = "Tijd: " + time.toString();
}

function endGame() {
    gameEnded = true;
    let scoreText = document.getElementById("text");
    let timeText = document.getElementById("time");
    let img = document.getElementById("loeki");
    timeText.remove();
    if (score >= 30) {
        scoreText.innerHTML = "Wow, je heb Loeki vermoord!";
    } else {
        scoreText.innerHTML = "AH, jammer, Loeki is ontsnapt";
        img.src = "img/defeat.jpg";
    }
}
