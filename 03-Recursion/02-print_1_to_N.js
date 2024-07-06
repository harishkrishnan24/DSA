function print1toN(N) {
  if (N === 0) return;
  printNto1(N - 1);
  console.log(N);
}

console.log(print1toN(5));
