function pairProduct(numbers, targetProduct) {
	let seen = {};
	for (let i = 0; i < numbers.length; i++) {
		let number = numbers[i];
		let pair = targetProduct / number;
		if (pair in seen) return [seen[pair], i];
		seen[number] = i;
	}
	return [];
}

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 35)); // -> [1, 4]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 22)); // -> []
