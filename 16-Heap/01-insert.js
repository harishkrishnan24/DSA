class Heap {
  constructor(capacity) {
    this.heap = new Array(capacity);
    this.size = 0;
  }

  getLeft(i) {
    return 2 * i + 1;
  }

  getRight(i) {
    return 2 * i + 2;
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  isFull() {
    return this.size === this.heap.length;
  }

  insert(value) {
    if (this.isFull()) return;
    this.heap[this.size] = value;
    this.size++;

    let i = this.size - 1;

    while (i > 0 && this.heap[this.getParent(i)] > this.heap[i]) {
      [this.heap[this.getParent(i)], this.heap[i]] = [
        this.heap[i],
        this.heap[this.getParent(i)],
      ];
      i = this.getParent(i);
    }
  }
}
