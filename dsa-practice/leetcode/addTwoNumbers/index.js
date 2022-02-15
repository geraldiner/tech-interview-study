const ListNode = require("../../data-structures/ListNode");

function addTwoNumbers(list1, list2) {
	// traverse both lists to get the integer value
	// add the integer values
	// convert the integer value to a linked list
	if (list1 === null || list2 === null) return 0;
	const convertToInt = list => {
		let num = 0;
		let step = 0;
		while (list) {
			num += list.val * Math.pow(10, step);
			step += 1;
			list = list.next;
		}
		return num;
	};

	const num1 = convertToInt(list1);
	const num2 = convertToInt(list2);
	console.log({ num1, num2 });
	let sum = num1 + num2;
	let temp = sum % 10;
	sum = Math.floor(sum / 10);

	// convert sum to linked list
	// sum % 10 to get digits?
	let tail = new ListNode(temp);
	console.log(tail);
	const list3 = tail;
	while (sum > 0) {
		temp = sum % 10;
		tail.next = new ListNode(temp);
		sum = Math.floor(sum / 10);
		tail = tail.next;
	}
	return list3;
}

const a = new ListNode(2);
const b = new ListNode(4);
const c = new ListNode(3);

a.next = b;
b.next = c;

const d = new ListNode(5);
const e = new ListNode(6);
const f = new ListNode(4);

d.next = e;
e.next = f;

const r = addTwoNumbers(a, d);
r.print();
