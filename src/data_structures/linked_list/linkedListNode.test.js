const linkedListNode = require("./linkedListNode");

describe("LinkedListNode", () => {
	it("when created, list node should have value", () => {
		const node = linkedListNode(1);

		expect(node.value).toBe(1);
		expect(node.next).toBeNull();
	});

	it("should allow value to be an object", () => {
		const nodeValue = { value: 26, key: "dog" };
		const node = linkedListNode(nodeValue);

		expect(node.value.value).toBe(26);
		expect(node.value.key).toBe("dog");
		expect(node.next).toBeNull();
	});

	it("nodes should link together", () => {
		const node2 = linkedListNode(231);
		const node1 = linkedListNode(342, node2);

		expect(node1.next).toBeDefined();
		expect(node2.next).toBeNull();
		expect(node1.value).toBe(342);
		expect(node2.value).toBe(231);
	});

	it("should convert node to string", () => {
		const node = linkedListNode(2);

		expect(node.toString()).toBe("2");

		node.value = "str";
		expect(node.toString()).toBe("str");
	});

	it("should convert node to string with custom cb param", () => {
		const nodeValue = { value: 26, key: "dog" };
		const node = linkedListNode(nodeValue);

		const toStringCb = (value) =>
			`value: ${value.value}, key: ${value.key}`;

		expect(node.toString(toStringCb)).toBe("value: 26, key: dog");
	});
});
