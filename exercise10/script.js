var leapYear = parseInt(prompt("Enter the year: "));

if (leapYear % 4 === 0 && leapYear % 100 !== 0 || leapYear % 400 === 0) {
    alert("Is leap year!");
} else {
    alert("It´s not leap year!");
}