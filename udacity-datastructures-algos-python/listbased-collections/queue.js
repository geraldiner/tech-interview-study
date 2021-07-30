// """Make a Queue class using a list!
// Hint: You can use any Python list method
// you'd like! Try to write each one in as 
// few lines as possible.
// Make sure you pass the test cases too!"""

class Queue {
	constructor(head = null) {
		this.storage = [head]
	}

	enqueue(new_element) {
		this.storage.push(new_element);
	}

	peek() {
		return this.storage[0];
	}

	dequeue() {
		return this.storage.shift();
	}
}

// # Setup
q = new Queue(1)
q.enqueue(2)
q.enqueue(3)

// # Test peek
// # Should be 1
console.log(q.peek())

// # Test dequeue
// # Should be 1
console.log(q.dequeue())

// # Test enqueue
q.enqueue(4)
// # Should be 2
console.log(q.dequeue())
// # Should be 3
console.log(q.dequeue())
// # Should be 4
console.log(q.dequeue())
q.enqueue(5)
// # Should be 5
console.log(q.peek())