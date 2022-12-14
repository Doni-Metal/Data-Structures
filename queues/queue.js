class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if(this.length === 0) {
      this.last = newNode;
      this.first = newNode
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    let take = this.first;
    if (this.length === 0) return "Empty"
    if (this.length === 1) {
      this.last = null;
      this.first = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return take;
  }
}

let myQueue = new Queue();

myQueue.enqueue("Diego")
myQueue.enqueue("Mariana")
myQueue.enqueue("Adriana")
