function snakePattern(input) {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < input[i].length; j++) {
        result.push(input[i][j]);
      }
    } else {
      for (let j = input[i].length - 1; j >= 0; j--) {
        result.push(input[i][j]);
      }
    }
  }

  return result;
}

console.log(
  snakePattern([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
); // Output: [1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13]

console.log(
  snakePattern([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); // Output: [1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12]
