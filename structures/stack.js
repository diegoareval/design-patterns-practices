class StackItem {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class Stack {
    constructor() {
      this.head = null;
    }
    push(value) {
      const newValue = new StackItem(value, this.head);
      this.head = newValue;
    }
    pop() {
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
      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }

  const stack = new Stack();
  stack.push("1");
  stack.push("2");
  stack.push("3");
  
  console.log(stack.pop()); // 1
  console.log(stack.pop()); // 2
  console.log(stack.pop()); // 3
  console.log(stack.pop()); // null
  
  stack.print();