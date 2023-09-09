const stackNode = require("./stackNode");

describe("Stack Node", () => {
    it("should be able to create a stack node", () => {
        const node = stackNode(5);
        expect(node.value).toBe(5);
    })
})