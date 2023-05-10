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

	it('should prepend node to linked list', () => {
		const ll = linkedList();
	
		ll.prepend(2);
		expect(ll.head.toString()).toBe('2');
		expect(ll.tail.toString()).toBe('2');
	
		ll.append(1);
		ll.prepend(3);
	
		expect(ll.toString()).toBe('3,2,1');
	  });
});
