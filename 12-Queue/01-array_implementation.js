class ArrayQueue {
  constructor(capacity) {
    this.queue = new Array(capacity);
    this.front = 0;
    this.size = 0;
  }
  size() {
    return this.queue.length;
  }

  getFront() {
    if (this.isEmpty()) return null;
    return this.queue[this.front];
  }

  getRear() {
    if (this.isEmpty()) return null;
    return this.queue[(this.front + this.size - 1) % this.queue.length];
  }

  isFull() {
    return this.size === this.queue.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(element) {
    if (this.isFull()) return null;
    const rear = (this.front + this.size) % this.queue.length;
    this.queue[rear] = element;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty) return null;
    const item = this.queue[this.front];
    const front = (this.front + 1) % this.queue.length;
    this.size--;
    return item;
  }
}
