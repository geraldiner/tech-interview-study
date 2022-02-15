const { Node } = require("../../linkedlist");

function removeNthNode(head, n) {
	let slow = head;
	let fast = head;
	for (let i = 0; i < n; i++) {
		fast = fast.next;
	}

	if (!fast) return head.next;
	while (fast.next) {
		slow = slow.next;
		fast = fast.next;
	}
	slow.next = slow.next.next;
	return head;
}

// [X]
const x = new Node("X");
removeNthNode(x, 1);
x.print();

const t = new Node("T");
const u = new Node("U");
t.next = u;
removeNthNode(t, 1); // => [1]
t.print();
