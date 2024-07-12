class ArrayDeque {
  constructor(capacity) {
    this.deque = new Array(capacity);
    this.front = 0;
    this.size = 0;
  }

  insertFront(element) {
    if (this.isFull()) return null;
    this.front = (this.front - 1 + this.deque.length) % this.deque.length;
    this.deque[this.front] = element;
    this.size++;
  }

  insertRear(element) {
    if (this.isFull()) return null;
    const rear = (this.front + this.size) % this.deque.length;
    this.deque[rear] = element;
    this.size++;
  }

  deleteFront() {
    if (this.isEmpty()) return null;
    const item = this.deque[this.front];
    this.front = (this.front + 1) % this.deque.length;
    this.size--;
    return item;
  }

  deleteRear() {
    if (this.isEmpty()) return null;
    const item = this.deque[(this.front + this.size - 1) % this.deque.length];
    this.size--;
    return item;
  }

  getFront() {
    if (this.isEmpty()) return null;
    return this.deque[this.front];
  }

  getRear() {
    if (this.isEmpty()) return null;
    return this.deque[(this.front + this.size - 1) % this.deque.length];
  }

  size() {
    return this.size;
  }

  isFull() {
    return this.size === this.deque.length;
  }

  isEmpty() {
    return this.size === 0;
  }
}
