const linkedListNode = require("./linkedListNode")

describe("LinkedListNode", () => {
	it("when created, list node should have value", () => {
		const node = linkedListNode(1);

		expect(node.value).toBe(1);
		expect(node.next).toBeNull();
	});
});
