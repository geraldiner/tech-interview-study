const Node = require("../../../../data-structures/ListNode");

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

const sumList = head => {
	let sum = 0;
	let curr = head;
	while (curr) {
		sum += curr.val;
		curr = curr.next;
	}
	return sum;
};

// const sumListRecursive = head => {
// 	return sumValues(head, 0);
// };

// const sumValues = (node, sum) => {
// 	if (!node) return sum;
// 	return sumValues(node.next, sum + node.val);
// };

const sumListRecursive = head => {
	if (!head) return 0;
	return head.val + sumListRecursive(head.next);
};

console.log(sumList(a)); // 19
console.log(sumListRecursive(a));
