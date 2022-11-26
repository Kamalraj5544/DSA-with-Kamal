// this Implementation is using Arrays

class Deque {
  constructor() {
    this.data = [];
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.front == this.rear;
  }

  insertRear(value) {
    this.data[this.rear] = value;
    this.rear++;
  }

  popFront() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    let removedElement = this.data[this.front];
    this.front++;
    return removedElement;
  }

  insertFront(value) {
    if (this.front != 0) {
      this.front--;
      this.data[this.front] = value;
    } else {
      this.data.unshift(value);
      this.rear++;
    }
  }

  popRear() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    let rearElement = this.data[this.rear - 1];
    this.rear--;
    return rearElement;
  }

  getFront() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.data[this.front];
  }

  getRear() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.data[this.rear - 1];
  }

  displayDeque() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    let str = "";
    let curr = this.front;
    while (curr != this.rear) {
      str += this.data[curr] + " <-- ";
      curr++;
    }
    console.log(str);
  }

  length() {
    return this.rear - this.front;
  }
}

let myDeque = new Deque();
myDeque.insertFront(1);
myDeque.insertRear(2);
myDeque.displayDeque();
myDeque.insertRear(3);
myDeque.insertRear(4);
myDeque.displayDeque();
console.log(myDeque.popFront());
myDeque.displayDeque();
console.log(myDeque.popRear());
myDeque.displayDeque();
console.log(myDeque.length());
console.log(myDeque.getFront());
console.log(myDeque.getRear());
