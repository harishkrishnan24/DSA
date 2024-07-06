function countDigits(num) {
  let numOfDigits = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    numOfDigits++;
  }

  return numOfDigits;
}

console.log(countDigits(12345)); // 5
console.log(countDigits(123)); // 3
console.log(countDigits(9235)); // 4
console.log(countDigits(1)); // 1
