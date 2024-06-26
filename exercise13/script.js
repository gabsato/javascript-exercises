var number = parseInt(prompt("Enter the number: "));

let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break
        }
    }
}

if (isPrime) {
    alert(`The number ${number} is prime`);
} else {
    alert(`The number ${number} is not prrime`);
}
