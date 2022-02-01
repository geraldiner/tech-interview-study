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

function findZeroSumSubarray(list) {
	let currTotal = 0;
	let subarrays = [];
	for (let i = 0; i < list.length; i++) {
		currTotal = list[i];
		if (currTotal === 0) {
			subarrays.push([list[i]]);
			break;
		}
		for (let j = i + 1; j < list.length; j++) {
			if (list[j] === 0 - currTotal) {
				subarrays.push(list.slice(i, j + 1));
				break;
			} else {
				currTotal += list[j];
			}
		}
	}
	return subarrays.length > 0 ? subarrays : "No subarrays were found";
}

const input1 = [4, 2, -3, -1, 0, 4];
const input2 = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];

console.log(findZeroSumSubarray(input1));
console.log(findZeroSumSubarray(input2));
