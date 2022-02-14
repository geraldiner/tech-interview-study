class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// @param: root - reference to the root of a binary tree
// @param: target - value to be found in the tree
// @return: bool - whether or not the target is found in root

// iterative DFS
/* const treeIncludes = (root, target) => {
	if (root === null) return false;
	const stack = [root];
	while (stack.length > 0) {
		const curr = stack.pop();
		if (curr.val === target) return true;

		if (curr.right) stack.push(curr.right);
		if (curr.left) stack.push(curr.left);
	}
	return false;
}; */

// iterative BFS
/* const treeIncludes = (root, target) => {
	if (root === null) return false;
	const queue = [root];
	while (queue.length > 0) {
		const curr = queue.shift();
		if (curr.val === target) return true;

		if (curr.right) queue.push(curr.right);
		if (curr.left) queue.push(curr.left);
	}
	return false;
}; */

// recursive DFS
const treeIncludes = (root, target) => {
	if (root === null) return false;
	if (root.val === target) return true;
	return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeIncludes(a, "e")); // -> true
console.log(treeIncludes(a, "n")); // -> false
console.log(treeIncludes(null, "b")); // -> false
