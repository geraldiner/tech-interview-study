function pairSum(numbers, targetSum) {
	let seen = {};
	for (let i = 0; i < numbers.length; i++) {
		let pair = targetSum - numbers[i];
		if (pair in seen) {
			return [seen[pair], i];
		}
		seen[numbers[i]] = i;
	}
	return [];
}

console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
console.log(pairSum([9, 9], 18)); // -> [0, 1]
console.log(pairSum([3, 2, 5, 4, 1], 10)); // -> []
