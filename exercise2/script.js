var yearBirth = prompt("Enter the year you were born: ");

var currentYear = new Date().getFullYear();
var age = currentYear - yearBirth();

alert("You have " + age + " years old");