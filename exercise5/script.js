var number = prompt("Enter the number:");

var calcNumber = number % 2;

if (calcNumber === 0) {
    alert("The number is even");
} else if (calcNumber !== 0) {
    alert("The number is odd");
} else {
    alert("Error in enter number")
}