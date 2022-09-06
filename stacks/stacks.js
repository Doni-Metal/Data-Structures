class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }
  peek() {
    return this.data[this.top -1];
  }
  push(value) {
    this.data[this.top] = value;
    this.top++;
    return this;
  }
  pop() {
    if(this.top === 0) return "Empty"
    this.top--;
    return this.data.pop();
  }
  length() {
    return this.top;
  }
  isEmpty() {
    return this.top <= 0;
  }
  print() {
    let top = this.top -1;
    while(top >= 0) {
      console.log(this.data[top])
      top--;
    }
  }
}

let myStack = new Stack();