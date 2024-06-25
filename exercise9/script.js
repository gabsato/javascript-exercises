var randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

var guessNumber = parseInt(prompt("Guess the secret number: "));

if (randomNumber === guessNumber) {
    alert("Congratulations!");
} else {
    alert("Nice try! The number is " + randomNumber);
}