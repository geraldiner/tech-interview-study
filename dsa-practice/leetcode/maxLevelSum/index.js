function maxLevelSum(root) {
	if (root === null) return 1;
	let maxLevel = 0;
	let currLevel = 1;
	let maxLevelSum = 0;
	let queue = [root];
	while (queue.length > 0) {
		const curr = queue.shift();
		let levelSum = curr.val;

		currLevel += 1;
		while (queue.length > 0) {
			let temp = queue.pop();
			levelSum += temp.val;
		}

		if (levelSum > maxLevelSum) {
			maxLevelSum = levelSum;
			maxLevel = currLevel;
		}
		if (curr.left) queue.push(curr.left);
		if (curr.right) queue.push(curr.right);
	}
	return maxLevel;
}
