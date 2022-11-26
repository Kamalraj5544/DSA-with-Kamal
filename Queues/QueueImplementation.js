class Queue {
  constructor() {
    this.data = [];
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.front == this.rear;
  }

  enqueue(value) {
    this.data.push(value);
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    let removedElement = this.data[this.front];
    this.front++;
    return removedElement;
  }

  getFront() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.data[this.front];
  }

  displayQueue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    let str = "front ";
    let curr = this.front;
    while (curr != this.rear) {
      str += this.data[curr] + " <-- ";
      curr++;
    }
    str += "end";
    console.log(str);
  }

  length() {
    return this.rear - this.front;
  }
}

// let myQueue = new Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.displayQueue();
// myQueue.enqueue(4);
// myQueue.enqueue(5);
// myQueue.displayQueue();
// console.log(myQueue.dequeue());
// myQueue.displayQueue();
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
