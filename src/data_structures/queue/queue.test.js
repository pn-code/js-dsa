const queue = require("./queue");

describe("Queue", () => {
    it("should be able to enqueue", () => {
        const q = queue();

        q.enqueue(5);
        q.enqueue(5);
        q.enqueue(5);
        q.enqueue(5);

        expect(q.peek()).toBe(5);
        expect(q.length).toBe(4);
    });

    it("should be able to deque", () => {
        const q = queue();

        q.enqueue(5);
        q.enqueue(3);
        q.enqueue(5);
        q.enqueue(5);
        q.deque();

        expect(q.length).toBe(3);
        expect(q.peek()).toBe(3);
    });
});
