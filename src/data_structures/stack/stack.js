const createNode = require("../createNode");

function stack() {
  return {
    length: 0,
    head: undefined,
    push(item) {
      const node = createNode(item);
      this.length++;

      if (!this.head) {
        this.head = node;
        return;
      }

      this.head.next = node;
      node.prev = this.head;
      this.head = node;
    },
    pop() {
      if (this.length === 0) {
        return undefined;
      }

      if (this.length === 1 && this.head.prev) {
        const val = this.head.value;
        this.head = undefined;
        this.length--;
        return val;
      }

      if (this.head && this.head.value) {
        this.length--;
        const val = this.head.value;
        this.head = this.head.prev;
        this.head.next = undefined;
        return val;
      }
    },
    peek() {
      if (this.head) return this.head.value;
      return undefined;
    },
  };
}

module.exports = stack;
