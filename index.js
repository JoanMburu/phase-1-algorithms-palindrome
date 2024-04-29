function isPalindrome(word) {
  const cleanedWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let start = 0;
  let end = cleanedWord.length - 1;
  
  while (start < end) {
    if (cleanedWord[start] !== cleanedWord[end]) {
      return false;
    }
    start++;
    end--;
  }
  
  return true;
}

module.exports = isPalindrome;

// Test cases
console.log("1) returns true for 'abba'");
console.log("=>", isPalindrome("abba"));

console.log("");

console.log("2) returns true for 'racecar'");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("3) returns true for 'a'");
console.log("=>", isPalindrome("a"));

console.log("");

console.log("4) returns false for 'robot'");
console.log("=>", isPalindrome("robot"));

console.log("");

console.log("5) returns false for 'ab'");
console.log("=>", isPalindrome("ab"));