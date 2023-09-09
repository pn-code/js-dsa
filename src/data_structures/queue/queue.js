const createNode = require("../createNode");

function queue() {
    return {
        length: 0,
        head: undefined,
        tail: undefined,
        enqueue(item) {
            const node = createNode(item);

            this.length++;

            if (!this.head) {
                this.head = node;
                this.tail = node;
                return;
            }

            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        },
        deque() {
            if (!this.head) {
                return undefined;
            }

            if (this.length === 1) {
                const value = this.head.value;
                this.head = undefined;
                this.tail = undefined;
                this.length--;
                return value;
            }

            const value = this.head.value;
            this.length--;
            this.head = this.head.next;
            this.head.prev = undefined;
            return value;
        },
        peek() {
            if (!this.head) return undefined;
            return this.head.value;
        },
    };
}

module.exports = queue;
