function containsDuplicate(nums) {
	const set = new Set(nums);
	return nums.length !== set.size;
}

console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([2, 3, 3, 4]));
