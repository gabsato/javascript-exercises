var numbers = [];

for (let i = 0; i < 3; i++) {
    var maxNumber = parseFloat(prompt("Enter the number: "));
    numbers.push(maxNumber);
}

var max = Math.max(...numbers);

alert("The max number is " + max);