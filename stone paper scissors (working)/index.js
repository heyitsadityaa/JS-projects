document.addEventListener("DOMContentLoaded", () => {
    const playerText = document.querySelector("#playerTest");
    const computerText = document.querySelector("#computerTest");
    const resultText = document.querySelector("#resultTest");
    const choiceButtons = document.querySelectorAll(".choiceBtn");
    let player;
    let computer;
    let result;
  
    choiceButtons.forEach(button => button.addEventListener("click", () => {
      player = button.textContent;
      computerTurn();
      playerText.textContent = `Player: ${player}`;
      computerText.textContent = `Computer: ${computer}`;
      resultText.textContent = checkWinner();
    }));
  
    function computerTurn() {
      const randNum = Math.floor(Math.random() * 3) + 1;
      switch (randNum) {
        case 1:
          computer = "ROCK";
          break;
        case 2:
          computer = "PAPER";
          break;
        case 3:
          computer = "SCISSORS";
          break;
      }
    }
  
    function checkWinner() {
      if (player === computer) {
        return "Draw";
      } else if (computer === "ROCK") {
        return (player === "PAPER") ? "You WIN" : "YOU LOSE";
      } else if (computer === "PAPER") {
        return (player === "SCISSORS") ? "You WIN" : "YOU LOSE";
      } else if (computer === "SCISSORS") {
        return (player === "ROCK") ? "You WIN" : "YOU LOSE";
      }
    }
  });
