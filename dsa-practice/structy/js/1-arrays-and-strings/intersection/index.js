function intersection(a, b) {
	const c = [];
	const aSet = new Set(a);
	for (let el of b) {
		if (aSet.has(el)) c.push(el);
	}
	return c;
}

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [2,6]
console.log(intersection([2, 4, 6], [4, 2])); // -> [2,4]
console.log(intersection([0, 1, 2], [10, 11])); // -> []
