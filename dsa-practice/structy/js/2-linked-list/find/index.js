const Node = require("../../../../data-structures/ListNode");

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

const find = (head, target) => {
	let curr = head;
	while (curr) {
		if (curr.val === target) {
			return true;
		}
		curr = curr.next;
	}
	return false;
};

const findRecursive = (head, target) => {
	if (!head) return false;
	if (head.val === target) return true;
	return findRecursive(head.next, target);
};

console.log(find(a, "c")); // true
console.log(find(a, "q")); // false
console.log(findRecursive(a, "c")); // true
console.log(findRecursive(a, "q")); // false
