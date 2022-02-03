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
		if (this.head) {
			let curr = this.head;
			while (curr.next) {
				curr = curr.next;
			}
			curr.next = new_node;
		} else {
			this.head = new_node;
		}
	}

	delete(value) {
		if (this.head) {
			let curr = this.head;
			let prev = null;
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
	}

	print() {
		let result = "";
		let curr = this.head;
		if (curr) {
			while (curr) {
				result += `${curr.value} -> `;
				curr = curr.next;
			}
		}
		result += "null";
		console.log(result);
	}
}

let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");
let e = new Node("E");

let l1 = new LinkedList();
console.log("instantiate l1");
l1.print();

l1.insert(a);
console.log("insert a");
l1.print();

console.log("insert b");
l1.insert(b);
l1.print();

console.log("insert c");
l1.insert(c);
l1.print();

console.log("insert d");
l1.insert(d);
l1.print();

console.log("insert e");
l1.insert(e);
l1.print();

console.log("delete c");
l1.delete("C");
l1.print();

console.log("delete a");
l1.delete("A");
l1.print();

console.log("delete E");
l1.delete("E");
l1.print();

console.log("insert g");
l1.insert(new Node("G"));
l1.print();
