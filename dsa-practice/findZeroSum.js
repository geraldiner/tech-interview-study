/* Given an integer array, print all subarrays with zero-sum.

Ex: [4, 2, -3, -1, 0, 4]
Result: [-3,-1,0,4], [0]

Do the elements have to be consecutive?
Is the array sorted?
Is there a limit to the size of the array?
What about an empty array?
Is there the possibility that there will be no subarray? 

Brute force solution-
Start a for loop at i=0 for the index, then do a nested for loop for j=i+1 to check if the next element will make the current number sum to zero
If so, return the subarray
If not, keep looking
** Complexity will be O(n^2) bc of the nested for loop */

/* function findZeroSumSubarray(list) {
	for (let i = 0; i < list.length; i++) {
		let currTotal = 0;
		for (let j = i + 1; j < list.length; j++) {
			currTotal += list[j];
			if (currTotal === 0) {
				console.log(`Subarray: ${list.slice(i + 1, j + 1)}`);
			}
		}
	}
} */

/* function findZeroSumSubarray(list) {
	let sumSet = new Set();
	let sum = 0;
	for (let i = 0; i < list.length; i++) {
		sum += list[i];
		if (sum === 0 || sumSet.has(sum)) {
			return true;
		}
		sumSet.add(sum);
	}
	return false;
} */

function findZeroSumSubarray(list) {
	let map = {};
	let total = 0;
	map[total] = -1;
	for (let i = 0; i < list.length; i++) {
		total += list[i];
		if (total in map) {
			let start = map[total];
			console.log(`Subarray: ${list.slice(start + 1, i + 1)}`);
		}
		map[total] = i;
	}
}

const input1 = [4, 2, -3, -1, 0, 4];
const input2 = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];

console.log(findZeroSumSubarray(input1));
console.log(findZeroSumSubarray(input2));
