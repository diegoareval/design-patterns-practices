const Iterator = require("../iterator");

class LinkedListItem {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    const newItem = new LinkedListItem(value, this.head);
    this.head = newItem;
  }
  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
  deleteHead() {
    if (this.head) {
      if (this.head.next) {
        const secondNode = this.head.next;
        this.head = secondNode;
      } else {
        this.head = null;
      }
    }
  }
  print() {
    let currentNode = this.head;
    let container = new Iterator(currentNode);
    let iterator = container.getIterator();
    while (iterator.hasNext()) {
      if (
        currentNode &&
        currentNode.hasOwnProperty("value") &&
        currentNode.hasOwnProperty("next")
      ) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
}

list = new LinkedList();
list.prepend("a");
list.prepend("b");
list.prepend("c");
console.log(list.find("b"));
list.print();
