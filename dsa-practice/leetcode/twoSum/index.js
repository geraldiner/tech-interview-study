function twoSum(nums, target) {
	const numsSeen = {};
	for (let i = 0; i < nums.length; i++) {
		if (target - nums[i] in numsSeen) {
			return [numsSeen[target - nums[i]], i];
		}
		numsSeen[nums[i]] = i;
	}
	return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([-1, 3, 5, 2, 0], 0));
