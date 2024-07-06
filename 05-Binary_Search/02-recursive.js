function binarySearch(arr, target, low, high) {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
  else return binarySearch(arr, target, mid + 1, high);
}

console.log(binarySearch([10, 20, 30, 40, 50, 60], 20, 0, 5)); // 1
console.log(binarySearch([5, 15, 25], 25, 0, 2)); // 2
console.log(binarySearch([5, 10, 15, 25, 35], 20, 0, 4)); // -1
