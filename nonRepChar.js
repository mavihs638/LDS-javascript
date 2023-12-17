function findFirstNonRepeatingCharacter(str) {
    let index = -1;
    let resultChar = ' ';

    if (str.length === 0) {
        console.log("EMPTY STRING");
        return;
    }

    for (const char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            resultChar = char;
            break;
        } else {
            index += 1;
        }
    }

    if (index === str.length - 1) {
        console.log("All characters are repeating");
    } else {
        console.log("First non-repeating character is " + resultChar);
    }
}

// Example usage
const inputString = "geeksforgeeks";

// Function call
findFirstNonRepeatingCharacter(inputString);
