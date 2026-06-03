function firstNonRepeatedChar(str) {
 // Write your code here
	    const charCount = {};

    // Count occurrences
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // No non-repeated character found
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
