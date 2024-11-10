export class LinkedList {
  #head;

  constructor(head = null) {
    this.#head = head;
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

  tail() {
    let currentNode = this.#head;
    if (!currentNode) return currentNode;

    while (true) {
      if (!currentNode.next) return currentNode;
      else currentNode = currentNode.next;
    }
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

  shift() {
    let currentNode = this.#head;
    if (!currentNode) return "Error : this list is already empty";
    else {
      this.#head = currentNode.next;
      return currentNode;
    }
  }

  pop() {
    let currentNode = this.#head;

    if (!currentNode) return "Error : this list is already empty";
    else if (currentNode.next === null) {
      this.#head = null;
      return currentNode;
    }

    while (true) {
      let nextNode = currentNode.next;

      if (nextNode.next === null) {
        currentNode.next = null;
        return nextNode;
      } else currentNode = currentNode.next;
    }
  }

  contains(string) {
    let currentNode = this.#head;
    if (!currentNode) return false;

    while (true) {
      if (currentNode.value === string) return true;
      else if (currentNode.next === null) return false;
      else currentNode = currentNode.next;
    }
  }

  find(string) {
    let currentIndex = 0;
    let currentNode = this.#head;

    if (!currentNode) return null;

    while (true) {
      if (currentNode.value === string) return currentIndex;
      else if (currentNode.next === null) return null;
      else {
        currentIndex += 1;
        currentNode = currentNode.next;
      }
    }
  }

  toString() {
    let values = [];
    let currentNode = this.#head;

    while (true) {
      if (currentNode === null) {
        values.push("null");
        return values.join(" -> ");
      } else {
        values.push(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }

  insertAt(string, targetIndex) {
    let node = new Node(string);
    let currentNode = this.#head;
    let previousNode;
    let currentIndex = 0;

    if(targetIndex === 0) {
      currentNode? node.next = currentNode: null;
      this.#head = node;
      return;
    }

    while (true) {
      if (currentIndex === targetIndex) {
        previousNode.next = node;
        node.next = currentNode;
        break;
      } else if (currentNode === null && currentIndex < targetIndex) {
        return "Error: range overflow, this index doesn't exist";
      } else {
        currentIndex += 1;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }
}

export class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
