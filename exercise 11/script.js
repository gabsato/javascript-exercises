var vowel = ["a", "á", "à", "ã", "â", "e", "é", "è", "ê", "i", "í", "ì", "o", "ó", "ò", "õ", "ô", "u", "ú", "ù", "û"];

var word = prompt("Enter the word: ");

var lowercaseWord = word.toLowerCase();

var vowelCounts = 0;

for (let i = 0; i < lowercaseWord.length; i++) {
    const letter = lowercaseWord[i];
    if (vowel.includes(letter)) {
        vowelCounts++;
    }
}

alert(`The word "${word}" have ${vowelCounts} vowel`);