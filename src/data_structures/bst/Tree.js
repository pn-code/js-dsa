const TreeNode = require("./TreeNode");

function BST() {
    return {
        terminus: null,
        find(target, node = this.terminus) {
            if (!node) {
                return false;
            }

            if (target == node.value) {
                return true;
            }

            if (target > node.value) {
                return this.find(target, node.right);
            }

            if (target <= node.value) {
                return this.find(target, node.left);
            }
        },
        insert(node, value) {},
        delete(value) {},
    };
}

module.exports = BST;
