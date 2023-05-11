const linkedListNode = require("./linkedListNode");

function linkedList() {
  return {
    head: null,
    tail: null,
    append(value) {
      const node = linkedListNode(value);

      if (!this.head) {
        this.head = node;
        this.tail = node;
        return this;
      }

      this.tail.next = node;
      this.tail = node;

      return this;
    },
    prepend(value) {
      const node = linkedListNode(value);

      if (!this.head) {
        this.head = node;
        this.tail = node;
        return this;
      }

      node.next = this.head;
      this.head = node;
      return this;
    },
    insert(value, rawIndex) {
      const index = rawIndex < 0 ? 0 : rawIndex;

      if (index === 0) {
        this.prepend(value);
      } else {
        let count = 1;
        let currentNode = this.head;
        const newNode = linkedListNode(value);

        while (currentNode) {
          if (count === index) break;
          currentNode = currentNode.next;
          count += 1;
        }

        if (currentNode) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
        } else {
          if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
          } else {
            this.head = newNode;
            this.tail = newNode;
          }
        }
      }
      return this;
    },
    toArray() {
      const nodes = [];
      let currentNode = this.head;

      while (currentNode) {
        nodes.push(currentNode);
        currentNode = currentNode.next;
      }

      return nodes;
    },
    toString(cb) {
      return this.toArray()
        .map((node) => node.toString(cb))
        .toString();
    },
  };
}

module.exports = linkedList;
