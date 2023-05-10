const linkedList = require("./linkedList");

describe("LinkedList", () => {
	it("should create empty linked list", () => {
		const ll = linkedList();
		expect(ll.toString()).toBe("");
	});

	it("should be able to append node to linked list", () => {
		const ll = linkedList();

		expect(ll.head).toBeNull();
		expect(ll.tail).toBeNull();

		ll.append(1);
		ll.append(2);

		expect(ll.toString()).toBe("1,2");
		expect(ll.tail.next).toBeNull();
	});
});
