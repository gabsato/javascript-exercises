var price = prompt("Enter the price: ");
var discountPerc = parseFloat(prompt("Enter the discount percentage: "));

var discount = (discountPerc / 100) * price;
var finalPrice = price - discount;

alert(finalPrice);