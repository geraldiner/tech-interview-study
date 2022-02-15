class ListNode {
	constructor(val = null, next = null) {
		this.val = val;
		this.next = next;
	}

	insert(val) {
		if (this) {
			let curr = this;
			while (curr.next != null) {
				curr = curr.next;
			}
			curr.next = new ListNode(val);
		} else {
			this.val = val;
		}
	}

	//        A -> B -> C -> D -> null
	//            prev curr

	delete(target) {
		if (this) {
			let curr = this;
			let prev = null;
			while (curr != null) {
				if (curr.val === target) {
					prev.next = curr.next;
					return;
				}
				prev = curr;
				curr = curr.next;
			}
		}
		return;
	}

	//        A -> B -> C -> D -> null
	//            prev curr

	getMiddleOfList() {
		if (this) {
			let fast = this;
			let slow = this;
			while (fast != null && fast.next != null) {
				fast = fast.next.next;
				slow = slow.next;
			}
			return slow;
		}
	}

	reverse() {
		if (this) {
			let curr = this;
			let prev = null;
			while (curr != null) {
				let next = curr.next;
				curr.next = prev;
				prev = curr;
				curr = next;
			}
			return prev;
		}
		return;
	}

	print() {
		let str = "";
		let curr = this;
		while (curr != null && curr.val != null) {
			str += `${curr.val} -> `;
			curr = curr.next;
		}
		str += "null";
		console.log(str);
	}
}

module.exports = ListNode;
