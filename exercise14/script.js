var avarageNumber = parseInt(prompt("Enter how many numbers you want to average: "));

var sumNumbers = 0;

for (let i = 0; i < avarageNumber; i++) {
    numbers = parseInt(prompt("Enter the number: "));

    sumNumbers += numbers;
}

var avarage = sumNumbers / avarageNumber;

alert("The avarage is " + avarage);