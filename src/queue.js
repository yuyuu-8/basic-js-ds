const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return dequeuedValue;
  }

  getUnderlyingList() {
    let currentNode = this.head;
    const result = [];
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return this._buildLinkedList(result);
  }

  _buildLinkedList(values) {
    if (values.length === 0) return null;
    const head = new ListNode(values[0]);
    let currentNode = head;
    for (let i = 1; i < values.length; i++) {
      currentNode.next = new ListNode(values[i]);
      currentNode = currentNode.next;
    }
    return head;
  }
}

module.exports = {
  Queue
};
