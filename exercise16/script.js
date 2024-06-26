var grade1 = parseFloat(prompt("Enter the first test grade: "));
var grade2 = parseFloat(prompt("Enter the second test grade: "));
var grade3 = parseFloat(prompt("Enter the third test grade: "));

var weight1 = parseFloat(prompt("Enter the weight of the first test: "));
var weight2 = parseFloat(prompt("Enter the weight of the second test: "));
var weight3 = parseFloat(prompt("Enter the weight of the third test: "));

var weightTotal = weight1 + weight2 + weight3;

var avarage = ((grade1 * weight1) + (grade2 * weight2) + (grade3 * weight3)) / weightTotal;

alert("The avarage grade is " + avarage.toFixed(2));