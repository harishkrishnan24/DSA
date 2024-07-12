class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAtBeginning(head, data) {
  const newNode = new Node(data);
  const temp = head;
  newNode.next = temp;

  return newNode;
}
