const stack = require("./stack");

describe("Stack", () => {
    it("should be able to create a stack", () => {
        const s = stack();
        expect(s.peek()).toBeUndefined();
    })

    it("should be able to push", () => {
        const s = stack();
        
        s.push(51);
        s.push(52);
        s.push(25);
        s.push(215);

        expect(s.peek()).toBe(215);
        expect(s.length).toBe(4);
    })

    it("should be able to pop", () => {
        const s = stack();
        
        s.push(51);
        s.push(52);
        s.push(25);
        s.push(215);
        s.pop();
        s.pop();

        expect(s.peek()).toBe(52);
        expect(s.length).toBe(2);
    })
})