class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	insert(new_node) {
		let curr = this.head;
		if (this.head) {
			while (curr.next) {
				curr = curr.next;
			}
			curr.next = new_node;
		} else {
			this.head = new_node;
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
				}
				prev = curr;
				curr = curr.next;
			}
		}
		return;
	}

	print() {
		let result = "";
		let curr = this.head;
		if (this.head) {
			while (curr) {
				result += `${curr.value} -> `;
				curr = curr.next;
			}
		}
		result += "null";
		console.log(result);
	}
}

let l1 = new LinkedList(new Node(10));
l1.print();
let l2 = new LinkedList();
l2.print();
l2.insert(new Node(1));
l2.print();
l2.insert(new Node(2));
l2.print();
l2.insert(new Node(5));
l2.print();
l2.insert(new Node(6));
l2.print();
l2.insert(new Node(3));
l2.print();
l2.delete(5);
l2.print();
