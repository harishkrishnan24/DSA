function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50, 60], 20)); // 1
console.log(binarySearch([5, 15, 25], 25)); // 2
console.log(binarySearch([5, 10, 15, 25, 35], 20)); // -1
