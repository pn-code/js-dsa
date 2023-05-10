const linkedList = require("./linkedList")

describe("LinkedList", () => {
	it("should create empty linked list", () => {
		const ll = linkedList();
		expect(ll.toString()).toBe("");
	});
});
