function countDistinctElements(arr) {
  const distinctElements = new Set(arr);
  return distinctElements.size;
}

console.log(countDistinctElements([15, 12, 13, 12, 13, 13, 18])); // Output: 4
console.log(countDistinctElements([10, 10, 10])); // Output: 1
console.log(countDistinctElements([10, 11, 12])); // Output: 3
