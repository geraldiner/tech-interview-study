const ListNode = require("../../../../data-structures/ListNode");

const a = new ListNode("a");
const b = new ListNode("b");
const c = new ListNode("c");
const d = new ListNode("d");

a.next = b;
b.next = c;
c.next = d;

a.print();

const linkedListValues = head => {
	const values = [];
	let curr = head;
	while (curr) {
		values.push(curr.val);
		curr = curr.next;
	}
	return values;
};

const linkedListValuesRecursive = head => {
	const values = [];
	getValues(head, values);
	return values;
};

const getValues = (node, values) => {
	if (!node) return;
	values.push(node.val);
	getValues(node.next, values);
};

const aValues = linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
console.log(aValues);

const aValuesRec = linkedListValuesRecursive(a);
console.log(aValuesRec);
