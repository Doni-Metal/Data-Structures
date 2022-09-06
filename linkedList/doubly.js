class Node  {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  prepend(value) {
    const newNode = new Node(value, this.head, null);
    if(this.head) {
        this.head.prev = newNode;
      } else {
        this.tail = newNode;
      }
    this.size++;
    this.head = newNode;
    return this;
  }
  append(value) {
    const newNode = new Node(value, null, this.tail);
    if(this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.size++;
    this.tail = newNode;
    return this
  }
  shift() {
    if(!this.head) return undefined;
    let oldHeadValue = this.head.value
    this.head = this.head.next
    if(this.head) {
      this.head.prev = null;
    } else {
      this.tail = null
    }
    this.size--;
    if(this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldHeadValue;
  }
  pop() {
    if(!this.tail) return undefined;
    let oldTailValue = this.tail.value;
    this.tail = this.tail.prev
    if(this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.size--;
    if(this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldTailValue;
  }
  search(value) {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return `index: ${count}`;
      } else {
        count++;
        current = current.next
      }
    }
    return "Not Found"
  }
  insert(value, index) {
    if(index < 0 || index > this.size) {
      return `Please enter a valid index or try myLinkedList(${value}, ${this.size})`;
    }
    let newNode = new Node(value);
    let curr, prev;
    if(index === this.size) 
      return this.append(value);
    if(index === 0) 
      return this.prepend(value);
    else {
      curr = this.head;
      let it = 0;
      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }
      newNode.next = curr;
      prev.next = newNode;
    }
    this.size++;
    return this
  }
  remove(value) {
    let current = this.head;
    let prev = null
    while(current !== value) {
      if(current.value === value) {
        if(prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return `Value: ${current.value} removed`;
      }
      prev = current;
      current = current.next;
    }
  }
  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.value + " ";
      current = current.next;
    }
    console.log(str);
  }
}

let myLinkedList = new DoublyLinkedList();

myLinkedList.append(1)
myLinkedList.append(2)
myLinkedList.append(5)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.prepend(0)
