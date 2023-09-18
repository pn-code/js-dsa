const BST = require("./tree");
const TreeNode = require("./TreeNode");

describe("Tree", () => {
    it("should be able to create a tree", () => {
        const terminus = TreeNode(5);
        const firstLeaf = TreeNode(1);
        const secondLeaf = TreeNode(6);

        terminus.left = firstLeaf;
        terminus.right = secondLeaf;

        const tree = BST();
        tree.terminus = terminus;

        expect(tree.terminus.value).toBe(5);
        expect(tree.terminus.left.value).toBe(1);
        expect(tree.terminus.right.value).toBe(6);
    });

    it("should be able to find a value in the tree", () => {
        const terminus = TreeNode(5);
        const firstLeaf = TreeNode(1);
        const secondLeaf = TreeNode(6);

        terminus.left = firstLeaf;
        terminus.right = secondLeaf;

        const tree = BST();
        tree.terminus = terminus;

        expect(tree.terminus.value).toBe(5);
        expect(tree.terminus.left.value).toBe(1);
        expect(tree.terminus.right.value).toBe(6);

        expect(tree.find(5)).toBe(true);
        expect(tree.find(1)).toBe(true);
        expect(tree.find(6)).toBe(true);
        expect(tree.find(100)).toBe(false);
    });
});
