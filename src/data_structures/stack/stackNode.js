function stackNode(value) {
  return { value, prev: undefined, next: undefined };
}

module.exports = stackNode;