function linkedList() {
	return {
		head: null,
		tail: null,
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
			return this.toArray().map((node) => node.toString(cb)).toString();
		},
	};
}

module.exports = linkedList;
