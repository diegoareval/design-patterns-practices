class QueueItem {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }

  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    enqueue(value) {
      const newItem = new QueueItem(value, null);
      if (this.tail) {
        this.tail.next = newItem;
      }
      this.tail = newItem
      if (!this.head) {
        this.head = this.tail
      }
    }
    dequeue() {
      if (!this.head) {
        return null;
      }
      const firstNode = this.head;
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null; 
        this.tail = null; 
      }
      return firstNode;
    }
    print() {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }

  const queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // null

queue.print();