function areRotations(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    } else {
        for (let i = 0; i < s1.length; i++) {
            if (s1.charAt(i) === s2.charAt(0)) {
                if (
                    s1.substring(i) === s2.substring(0, s1.length - i) &&
                    s1.substring(0, i) === s2.substring(s1.length - i)
                ) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Example usage
const str1 = "AACD";
const str2 = "ACDA";

// Function call
if (areRotations(str1, str2)) {
    console.log("Strings are rotations of each other");
} else {
    console.log("Strings are not rotations of each other");
}
