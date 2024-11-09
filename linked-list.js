export class LinkedList {
  constructor(head = null, tail = null, size = 0) {
    this.head = head;
    this.tail = tail;
    this.size = size;
  }

  append(node) {
    let currentNode = this.head;
    if (!currentNode) return this.head = node;

    while (true) {
      if (!currentNode.next) {
        currentNode.next = node;
        break;
      }

      currentNode = currentNode.next;
    }
  }
}

export class node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
