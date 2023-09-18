const TreeNode = require("./TreeNode");

describe("Create Tree Node", () => {
    it("should be able to create a tree node", () => {
        const node = TreeNode(5);
        expect(node.value).toBe(5);
    });
});
