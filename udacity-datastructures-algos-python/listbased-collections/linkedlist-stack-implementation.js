class Element {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	append(element) {
		let curr = this.head;
		if (this.head) {
			while (curr.next) {
				curr = curr.next;
			}
			curr.next = element;
		} else {
			this.head = element
		}
	}

	get_position(position) {
		let curr = this.head;
		let pos = 1;
		if (this.head) {
			while (curr) {
				if (position === pos) {
					return curr.value;
				}
				curr = curr.next;
				pos += 1;
			}
			return -1;
		} else {
			return -1;
		}
	}

	insert(element, position) {
		let curr = this.head;
		let prev = null;
		let pos = 1;
		if (this.head) {
			while (curr) {
				if (position === pos) {
					element.next = curr;
					prev.next = element;
					return;
				}
				pos += 1;
				prev = curr;
				curr = curr.next;
			}
		} else {
			this.head = element;
		}
	}

	insert_first(element) {
		element.next = this.head;
		this.head = element;
	}

	delete(value) {
		let curr = this.head;
		let prev = null;
		if (this.head) {
			while (curr) {
				if (curr.value === value) {
					if (prev) {
						prev.next = curr.next;
					} else {
						this.head = curr.next;
					}
					curr.next = null;
					return
				}
				prev = curr;
				curr = curr.next;
			}
		}
		return;
	}

	delete_first() {
		if (this.head) {
			let temp = this.head;
			this.head = this.head.next;
			return temp;
		} else {
			return -1
		}
	}
}

class Stack {
	constructor(top = null) {
		this.ll = new LinkedList(top);
	}

	push(element) {
		this.ll.insert_first(element);
	}

	pop() {
		return this.ll.delete_first();
	}
}

//# Test cases
//# Set up some Elements
let e1 = new Element(1)
let e2 = new Element(2)
let e3 = new Element(3)
let e4 = new Element(4)

//# Start setting up a Stack
let stack = new Stack(e1) 
console.log(stack) // [1]

//# Test stack functionality
stack.push(e2) // [2, 1]
stack.push(e3) // [3, 2, 1]
console.log(stack.pop().value) // 3
console.log(stack.pop().value) // 2
console.log(stack.pop().value) // 1
console.log(stack.pop()) // null
stack.push(e4) // [4]
console.log(stack.pop().value) // 4