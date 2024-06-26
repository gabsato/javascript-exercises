let even = "";

for (let i = 0; i <= 100; i++) {
    var numberEven = i % 2;
    if (numberEven === 0) {
        even += i + "\n";
    }
}

alert("Even numbers: " + even);