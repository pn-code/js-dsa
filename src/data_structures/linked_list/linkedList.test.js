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

  it("should prepend node to linked list", () => {
    const ll = linkedList();

    ll.prepend(2);
    expect(ll.head.toString()).toBe("2");
    expect(ll.tail.toString()).toBe("2");

    ll.append(1);
    ll.prepend(3);

    expect(ll.toString()).toBe("3,2,1");
  });

  it("should insert node to linked list", () => {
    const ll = linkedList();

    ll.insert(4, 3);
    expect(ll.head.toString()).toBe("4");
    expect(ll.tail.toString()).toBe("4");

    ll.insert(3, 2);
    ll.insert(2, 1);
    ll.insert(1, -7);
    ll.insert(10, 9);

    expect(ll.toString()).toBe("1,4,2,3,10");
  });

  it("should delete node by value from linked list", () => {
    const ll = linkedList();

    expect(ll.delete(5)).toBeNull();

    ll.append(1);
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(3);
    ll.append(3);
    ll.append(4);
    ll.append(5);

    expect(ll.head.toString()).toBe("1");
    expect(ll.tail.toString()).toBe("5");

    const deletedNode = ll.delete(3);
    expect(deletedNode.value).toBe(3);
    expect(ll.toString()).toBe("1,1,2,4,5");

    ll.delete(3);
    expect(ll.toString()).toBe("1,1,2,4,5");

    ll.delete(1);
    expect(ll.toString()).toBe("2,4,5");

    expect(ll.head.toString()).toBe("2");
    expect(ll.tail.toString()).toBe("5");

    ll.delete(5);
    expect(ll.toString()).toBe("2,4");

    expect(ll.head.toString()).toBe("2");
    expect(ll.tail.toString()).toBe("4");

    ll.delete(4);
    expect(ll.toString()).toBe("2");

    expect(ll.head.toString()).toBe("2");
    expect(ll.tail.toString()).toBe("2");

    ll.delete(2);
    expect(ll.toString()).toBe("");
  });

  it("should find node by value", () => {
    const ll = linkedList();

    expect(ll.find({ value: 5 })).toBeNull();

    ll.append(1);
    expect(ll.find({ value: 1 })).toBeDefined();

    ll.append(2).append(3);

    const node = ll.find({ value: 2 });

    expect(node.value).toBe(2);
    expect(ll.find({ value: 5 })).toBeNull();
  });

  it("should be able to count its own nodes when there are no nodes", () => {
    const ll = linkedList();

    expect(ll.size()).toBe(0);
  });

  it("should be able to count its own nodes when there are are nodes", () => {
    const ll = linkedList();

    ll.append(2).append(3);

    expect(ll.size()).toBe(2);
  });

  it("should be able to delete tail", () => {
    const ll = linkedList();

    ll.append(2).append(3);

    ll.deleteTail();

    expect(ll.size(1));
    expect(ll.head.value === 2);
  });

  it("should be able to delete head", () => {
    const ll = linkedList();

    ll.append(2).append(3);

    ll.deleteHead();

    expect(ll.size(1));
    expect(ll.head.value === 3);
  });

  it("should be able to make linked list from an array", () => {
    const ll = linkedList();

    ll.fromArray([1, 2, 3, 4, 5]);

    expect(ll.size()).toBe(5);
    expect(ll.toString()).toBe("1,2,3,4,5");
  });

  it("should be able to reverse linked list", () => {
    const ll = linkedList();

    ll.fromArray([1, 2, 3, 4, 5]).reverse();

    expect(ll.toString()).toBe("5,4,3,2,1");
  });
});
