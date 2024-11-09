export class LinkedList {
  constructor(head = null, tail = null, size = 0) {
    this.head = head;
    this.tail = tail;
    this.size = size;
  }
}

export class node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
