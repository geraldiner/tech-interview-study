class Node {
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
}

let linkedList1 = new LinkedList();

linkedList1.append(new Node(5));
linkedList1.append(new Node(10));
linkedList1.append(new Node(15));
linkedList1.append(new Node(20));
// console.log(linkedList1);
// console.log(linkedList1.get_position(2));

linkedList1.insert(new Node(8), 2);
console.log(linkedList1.get_position(4));
linkedList1.delete(15);
console.log(linkedList1.get_position(4));
linkedList1.delete(5);
console.log(linkedList1);