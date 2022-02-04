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

a.next = b;
b.next = c;
c.next = d;

a.print();

const n1 = new Node(1);
n1.print();

n1.insert(2);
n1.print();

a.delete("C");

a.print();
