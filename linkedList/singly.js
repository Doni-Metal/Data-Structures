// 1 --> 2 --> 3 --> 4 --> 5 --> null

// Prepend ⇒ Agregar un nodo al inicio
// Append ⇒ Agregar un nodo al final
// Lookup / Search ⇒ Buscar un nodo
// Insert ⇒ insertar un nodo en la lista
// Delete ⇒ Borrar un nodo

// let singlyLinkedList = {
//   head:  {
//     value: 1,
//     next:{
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size--;
    if(this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return current
  }
  prepend(value) {
    let newNode = new Node(value);
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return this;
  }
  shift() {
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.size--;
    if(this.size === 0){
      this.tail = null;
    }
    return currentHead
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
    console.log(str)
  }
}

let myLinkedList = new MySinglyLinkedList();

myLinkedList.append(1)
myLinkedList.append(2)
myLinkedList.append(5)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.prepend(0)
