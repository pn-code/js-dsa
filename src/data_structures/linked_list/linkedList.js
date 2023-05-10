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
