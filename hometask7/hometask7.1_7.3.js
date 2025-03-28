
//hometask 7.1

function removeSpaces(text) {
    return text.replace(/^\s+|\s+$/g, '');
}

console.log(removeSpaces('   textWithSpaces   ')); // "textWithSpaces"
console.log(removeSpaces('   more text with spaces   ')); // "more text with spaces"



//hometask 7.2

function findCapitalWords(sentence) {
    return sentence.match(/\b[A-Z][a-z]*\b/g) || [];
}

console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog")); // ["The", "Quick", "Brown", "Fox", "Lazy", "Dog"]
console.log(findCapitalWords("no capital letter here")); // []



//hometask 7.3

function getLetterCount(text) {
    let counts = {}; 

    function countLetter(letter) {
        letter = letter.toLowerCase();
        counts[letter] = (counts[letter] || 0) + 1;
        return letter;
    }

    text.replace(/[a-z]/gi, countLetter);

    return counts;
}

console.log(getLetterCount("banana")); // { b: 1, a: 3, n: 2 }
console.log(getLetterCount("The short text")); // { t: 4, h: 2, e: 2, s: 1, o: 1, r: 1, x: 1 }



