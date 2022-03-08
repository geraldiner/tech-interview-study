const Node = require("../../../../data-structures/ListNode");

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

const getNodeValue = (head, index) => {
	let curr = head;
	let step = 0;
	while (curr) {
		if (step === index) return curr.val;
		step += 1;
		curr = curr.next;
	}
	return null;
};

console.log(getNodeValue(a, 2)); // 'c'
console.log(getNodeValue(a, 7)); // null
