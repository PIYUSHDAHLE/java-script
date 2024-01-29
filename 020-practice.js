const prompt = require("prompt-sync")();

let correctnum = 500;

let i;

while (i != correctnum) {
  i = Number.parseInt(prompt("Enter the number : "));
  if (i === correctnum) {
    console.log("Congratulations! You guessed correctly!");
  } else {
    console.log("Your guess is too low! Try again.");
  }
}
