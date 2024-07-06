function isKthBitSet(num, k) {
  return ((num >> (k - 1)) & 1) !== 0;
}

console.log(isKthBitSet(5, 1)); // true
console.log(isKthBitSet(5, 2)); // false
console.log(isKthBitSet(8, 2)); // false
console.log(isKthBitSet(0, 3)); // false
