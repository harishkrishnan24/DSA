function isPalindrome(num) {
  let reverse = 0;
  let numCopy = num;

  while (numCopy > 0) {
    const lastDigit = numCopy % 10;
    reverse = reverse * 10 + lastDigit;
    numCopy = Math.floor(numCopy / 10);
  }

  return num === reverse;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(12345)); // false
console.log(isPalindrome(123321)); // true
console.log(isPalindrome(123454321)); // true
console.log(isPalindrome(123456789)); // false
