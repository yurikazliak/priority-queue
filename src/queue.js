const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
		
	}

	push(data, priority) {

	}

	shift() {

	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		return this.heap.length == null;
	}
}

module.exports = PriorityQueue;
