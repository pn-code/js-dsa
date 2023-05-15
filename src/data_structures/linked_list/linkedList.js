const linkedListNode = require("./linkedListNode");

function linkedList() {
  return {
    head: null,
    tail: null,
    size() {
      if (!this.head) {
        return 0;
      }

      let currentNode = this.head;
      let count = 0;

      // Traverse the list while keeping count
      while (currentNode) {
        count += 1;
        currentNode = currentNode.next;
      }

      // Return count when currentNode returns null
      return count;
    },
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
    delete(value) {
      // if there is no value in the linked list, return null
      if (!this.head) {
        return null;
      }

      // Initiate the deletedNode
      let deletedNode = null;

      // If this head is our deleted value, delete this head, and replace the head with the current head's next
      while (this.head && this.head.value === value) {
        deletedNode = this.head;
        this.head = this.head.next;
      }

      // If the head is not our deletedNode, we must traverse the linked list to find it
      let currentNode = this.head;

      // Checking if the next node is our deletedNode, if so make currentNode.next to currentNode.next.next
      if (currentNode !== null) {
        while (currentNode.next) {
          if (currentNode.next.value === value) {
            deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
          } else {
            // If currentNode is not our deletedNode value, keep traversing
            currentNode = currentNode.next;
          }
        }
      }

      // Check if tail must be deleted, change the tail to our currentNode
      if (this.tail.value === value) {
        this.tail = currentNode;
      }

      return deletedNode;
    },
    find({ value }) {
      // if head does not exist
      if (!this.head) {
        return null;
      }

      let currentNode = this.head;

      // traverse the linked list
      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode;
        } else {
          currentNode = currentNode.next;
        }
      }

      return null;
    },
    deleteTail() {
      // If tail does not exist return;
      if (!this.tail) {
        return this;
      }

      // There is only one node in linked list.
      if (this.head === this.tail) {

        this.head = null;
        this.tail = null;
  
        return this;
      }

      let currentNode = this.head;

      // Iterate over the linked list, while the currentNode has 2 valid nodes after it
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }

      this.tail = currentNode;

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
