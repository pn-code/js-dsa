function linkedListNode(value, next = null) {
	return {
		value: value,
		next: next,
		toString(cb) {
			return cb ? cb(this.value) : `${this.value}`;
		},
	};
}

module.exports = linkedListNode;
