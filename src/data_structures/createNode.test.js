const createNode = require("./createNode");

describe("Create Node", () => {
    it("should be able to create a node", () => {
        const node = createNode(5);
        expect(node.value).toBe(5);
    })
})