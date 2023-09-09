function createNode(value) {
  return { value, prev: undefined, next: undefined };
}

module.exports = createNode;