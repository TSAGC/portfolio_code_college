let guess = `` ;

let secret = Math.floor(Math.random() * 20) + 1;

while (guess != secret) {
  guess = prompt("Please guess the secret number (1-20) enter N to exit");

  if (guess === "N" || guess === "n") {
    break;
  }

  guess = parseInt(guess);

  if (guess === secret) {
    alert("Correct Guess!");
  } else if (guess < secret) {
    alert("Incorrect, too low");
  } else {
    alert("Incorrect, too high");
  }
}