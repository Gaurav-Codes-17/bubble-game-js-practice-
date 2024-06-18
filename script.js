let game = document.querySelector(".game");
let hit = document.querySelector(".hit");
let timerBox = document.querySelector(".timer");
let scoreDiv = document.querySelector(".scoreDiv");
let restart = document.querySelector(".restart");
let restarth1 = document.querySelector(".restart-h1");

let timer = 60;
let runTimer;
let score = 0;

//generate value
function genval() {
  for (i = 0; i < 126; i++) {
    let bubbles = document.querySelectorAll(".game-boxes");
    bubbles.forEach((bubble) => {
      let genVal = Math.floor(Math.random() * 10);

      bubble.innerText = genVal;
    });
  }
}

//generate hit value
function genHitVal() {
  hit.innerText = Math.floor(Math.random() * 10);
}

//make timer run

function timerRun() {
  runTimer = setInterval(() => {
    timer--;
    timerBox.textContent = timer;
    if (timer === 0) {
      clearInterval(runTimer); // Stops the interval when seconds reach 0
      timerBox.textContent = "0";
      restarth1.removeAttribute("id");
      restart.removeAttribute("id");
      document.querySelectorAll(".game-boxes").forEach((bubble) => {
        bubble.setAttribute("id", "hidden");
      });
    }
  }, 1000);
}

//function to display game-boxes

function genBoxes() {
  for (i = 0; i < 126; i++) {
    var gameBoxes = document.createElement("div");
    gameBoxes.classList.add("game-boxes");
    game.appendChild(gameBoxes);
  }
  hit.innerText = Math.floor(Math.random() * 10);

  hit.innerText = Math.floor(Math.random() * 10);
  let bubbles = document.querySelectorAll(".game-boxes");
  bubbles.forEach((bubble) => {
    bubble.addEventListener("click", () => {
      if (bubble.innerText == hit.innerText) {
        scoreDiv.innerText = score += 10;
        genHitVal();
        genval();
      }
    });
  });
}

// Function to restart the game
function restartGame() {
  // Reset timer to 60 seconds
  timer = 60;
  timerBox.textContent = timer;

  // Reset score to 0
  score = 0;
  scoreDiv.innerText = "00";

  // Restart timer
  clearInterval(runTimer);
  timerRun();

  // Reset hit value
  genHitVal();

  // Reset bubble values
  genval();

  // Remove 'hidden' attribute from bubbles
  document.querySelectorAll(".game-boxes").forEach((bubble) => {
    bubble.removeAttribute("id");
  });

  // Hide restart message
  restarth1.setAttribute("id", "hidden");
  restart.setAttribute("id", "hidden");
}

// Attach restartGame function to restart button click event
restart.addEventListener("click", () => {
  restartGame();
});

genBoxes();
genval();
timerRun();
