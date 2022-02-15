function maxDepth(root) {
	let maxLevel = -Infinity;
	const maxDepthHelper = (node, level) => {
		if (node === null) return;
		if (level > maxLevel) maxLevel = level;
		maxDepthHelper(node.left, level + 1);
		maxDepthHelper(node.right, level + 1);
	};
	maxDepthHelper(root, 1);
	return maxLevel;
}
