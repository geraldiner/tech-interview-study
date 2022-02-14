class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// DFS or BFS
// stack or queue
// r->l or l->r

// iterative DFS
/* 
const treeSum = root => {
	// the sum of an emtpy tree should be 0
	if (root === null) return 0;
	const stack = [root];
	let sum = 0;
	while (stack.length > 0) {
		const curr = stack.pop();
		sum += curr.val;
		if (curr.right) stack.push(curr.right);
		if (curr.left) stack.push(curr.left);
	}
	return sum;
}; 
*/

// iterative BFS
/*
const treeSum = root => {
	// the sum of an emtpy tree should be 0
	if (root === null) return 0;
	const queue = [root];
	let sum = 0;
	while (queue.length > 0) {
		const curr = queue.shift();
		sum += curr.val;
		if (curr.left) queue.push(curr.left);
		if (curr.right) queue.push(curr.right);
	}
	return sum;
};
*/

// recursive DFS
const treeSum = root => {
	// the sum of an emtpy tree should be 0
	if (root === null) return 0;
	return root.val + treeSum(root.left) + treeSum(root.right);
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeSum(a)); // -> 21
console.log(treeSum(null)); // -> 0
