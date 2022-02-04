class Node {
	constructor(value = null, next = null) {
		this.value = value;
		this.next = next;
	}

	insert(value) {
		if (this) {
			let curr = this;
			while (curr.next != null) {
				curr = curr.next;
			}
			curr.next = new Node(value);
		} else {
			this.value = value;
		}
	}

	//        A -> B -> C -> D -> null
	//            prev curr

	delete(target) {
		if (this) {
			let curr = this;
			let prev = null;
			while (curr != null) {
				if (curr.value === target) {
					prev.next = curr.next;
					return;
				}
				prev = curr;
				curr = curr.next;
			}
		}
		return;
	}

	//        A -> B -> C -> D -> null
	//            prev curr

	getMiddleOfList() {
		if (this) {
			let fast = this;
			let slow = this;
			while (fast != null && fast.next != null) {
				fast = fast.next.next;
				slow = slow.next;
			}
			return slow;
		}
	}

	reverse() {
		if (this) {
			let curr = this;
			let prev = null;
			while (curr != null) {
				let next = curr.next;
				curr.next = prev;
				prev = curr;
				curr = next;
			}
			return prev;
		}
		return;
	}

	print() {
		let str = "";
		let curr = this;
		while (curr != null && curr.value != null) {
			str += `${curr.value} -> `;
			curr = curr.next;
		}
		str += "null";
		console.log(str);
	}
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const ll = new Node(1);

ll.insert(2);
ll.insert(3);
ll.insert(4);

a.print();
a.reverse().print();
ll.print();
ll.reverse().print();
