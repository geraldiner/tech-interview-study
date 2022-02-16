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

function reverseLinkedList(head, prev = null) {
	if (!head) return prev;
	const next = head.next;
	head.next = prev;
	return reverseLinkedList(next, head);
}

const aRev = reverseLinkedList(a);
aRev.print();
