function removeNthNode(head, n) {
	if (head.next === null) return null;
	if (head !== null) {
		let curr = head;
		let prev = null;
		let fast = head;
		for (let i = 0; i < n; i++) {
			fast = fast.next;
		}
		while (fast !== null) {
			prev = curr;
			curr = curr.next;
			fast = fast.next;
		}
		prev.next = curr.next;
	}
	return head;
}

removeNthNode([1, 2, 3, 4, 5], 2); // => [1,2,3,5]
// 	1 	2	3	4	5
// p	c
// 						f

removeNthNode([1], 1); // => []
// 	1
// p	c
// 		f

removeNthNode([1, 2], 1); // => [1]
// 	1	2
// p	c
// 			f
