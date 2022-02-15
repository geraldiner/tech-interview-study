const TreeNode = require("../../data-structures/TreeNode");

function rangeSumBST(root, low, high) {
	if (root === null) return 0;
	const queue = [root];
	let sum = 0;
	while (queue.length > 0) {
		const current = queue.shift();
		if (current.val >= low && current.val <= high) {
			sum += current.val;
		}
		if (current.left) queue.push(current.left);
		if (current.right) queue.push(current.right);
	}
	return sum;
}

const a = new TreeNode(10);
const b = new TreeNode(5);
const c = new TreeNode(15);
const d = new TreeNode(3);
const e = new TreeNode(7);
const f = new TreeNode(18);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right - f;

console.log(rangeSumBST(a, 7, 15)); // 32

const g = new TreeNode(13);
const h = new TreeNode(1);
const i = new TreeNode(6);

d.left = h;
e.left = i;
c.left = g;

console.log(rangeSumBST(a, 6, 10)); // 23

const x = new TreeNode();

console.log(rangeSumBST(x, 1, 10)); // 0
