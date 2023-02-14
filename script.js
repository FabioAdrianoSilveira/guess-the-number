let secretNumber = parseInt(Math.random() * 100 + 1);

const resultLabel = document.getElementsByClassName("guess-result")[0];

function checkGuess() {
  const guess = document.getElementById("guess-field").value;

  if (guess == secretNumber) {
    resultLabel.innerHTML = "Acertou!";
    guess = "";
  } else if (guess < secretNumber) {
    resultLabel.innerHTML = "Errou... O número secreto é maior";
    guess = "";
  } else {
    resultLabel.innerHTML = "Errou... O número secreto é menor";
    guess = "";
  }
}
