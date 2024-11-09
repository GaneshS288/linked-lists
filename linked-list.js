export class LinkedList {
  #head;

  constructor(head = null, tail = null, size = 0) {
    this.#head = head;
    this.tail = tail;
    this._size = size;
  }

  append(string) {
    const node = new Node(string);
    let currentNode = this.#head;

    if (!currentNode) this.#head = node;
    else {
      while (true) {
        if (!currentNode.next) {
          currentNode.next = node;
          break;
        }

        currentNode = currentNode.next;
      }
    }
  }

  prepend(string) {
    const node = new Node(string);
    let headNode = this.#head;

    if (!headNode) this.#head = node;
    else {
      node.next = headNode;
      this.#head = node;
    }
  }

  size(node = this.#head, sizeCount = 0) {
    if (!node) return sizeCount;
    else {
      sizeCount += 1;
      return this.size(node.next, sizeCount);
    }
  }

  get head() {
    return this.#head;
  }

  at(targetIndex) {
    let currentNode = this.#head;

    if (!currentNode) return "Error : this list is empty";

    for (let currentIndex = 0; currentIndex <= targetIndex; currentIndex++) {
      if (currentIndex === targetIndex) return currentNode;
      else if (currentNode.next === null)
        return `Error: range overflow, this index ${targetIndex} is too high`;

      currentNode = currentNode.next;
    }
  }
}

export class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
