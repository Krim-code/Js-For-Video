preparing_for_lessons/arrays// Задание 1
function compareStringLengths(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    } else if (str2.length > str1.length) {
        return -1;
    } else {
        return 0;
    }
}

// Задание 2
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Задание 3
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Задание 4
function checkForSpam(str) {
    const spamWords = ["viagra", "cialis", "spam", "offer"];
    const lowercaseStr = str.toLowerCase();
    return spamWords.some(word => lowercaseStr.includes(word));
}

// Задание 5
function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    }
    return str;
}

// Задание 6
function isPalindrome(str) {
    const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

// Задание 7
function countWords(sentence) {
    const words = sentence.split(" ");
    return words.length;
}

// Задание 8
function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

// Задание 9
function averageWordLength(sentence) {
    const words = sentence.split(" ");
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    return totalLength / words.length;
}

// Задание 10
function findCharIndices(str, char) {
    const indices = [];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indices.push(i);
            count++;
        }
    }
    return { indices, count };
}
console.log(compareStringLengths("hello", "world")); // Output: 1
console.log(capitalizeFirstLetter("apple")); // Output: "Apple"
console.log(countVowels("hello")); // Output: 2
console.log(checkForSpam("Buy cheap viagra now")); // Output: true
console.log(truncateString("This is a long sentence.", 10)); // Output: "This is a..."
console.log(isPalindrome("racecar")); // Output: true
console.log(countWords("Hello, how are you?")); // Output: 4
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(averageWordLength("This is a sample sentence.")); // Output: 4.2
console.log(findCharIndices("hello world", "l")); // Output: { indices: [2, 3], count: 2 }