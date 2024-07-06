function largestElement(arr) {
  let largestElementIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[largestElementIdx] < arr[i]) {
      largestElementIdx = i;
    }
  }

  return largestElementIdx;
}

console.log(largestElement([1, 2, 3])); // 2
console.log(largestElement([1, 2, 3, 4])); // 3
console.log(largestElement([10, 5, 20, 8])); // 2
console.log(largestElement([40, 8, 50, 100])); // 3
