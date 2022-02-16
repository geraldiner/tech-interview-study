const ListNode = require("../../data-structures/ListNode");

const a = new ListNode("a");
const b = new ListNode("b");
const c = new ListNode("c");
const d = new ListNode("d");
const e = new ListNode("e");
const f = new ListNode("f");
const g = new ListNode("g");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

a.print();

function hasCycle(head) {
	if (!head) return false;
	const seen = new Set();
	let curr = head;
	while (curr) {
		if (seen.has(curr)) return true;
		if (!seen) return false;
		seen.add(curr);
		curr = curr.next;
	}
	return false;
}

console.log(hasCycle(a));

g.next = d;

console.log(hasCycle(a));
