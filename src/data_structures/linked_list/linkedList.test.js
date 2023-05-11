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

	  it('should insert node to linked list', () => {
		const ll = linkedList();
	
		ll.insert(4, 3);
		expect(ll.head.toString()).toBe('4');
		expect(ll.tail.toString()).toBe('4');
	
		ll.insert(3, 2);
		ll.insert(2, 1);
		ll.insert(1, -7);
		ll.insert(10, 9);
	
		expect(ll.toString()).toBe('1,4,2,3,10');
	  });
	
});
