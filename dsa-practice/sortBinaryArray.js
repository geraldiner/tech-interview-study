/* Given a binary array, sort it in linear time and constant space. The output should print all zeroes followed by all ones.

Ex: [1, 0, 1, 0, 1, 0, 0, 1]
Result: [0, 0, 0, 0, 1, 1, 1, 1]

What about empty arrays?
Will there ever be invalid elements?
What is the return? The original list? Is it correct to assume that sorting should be done in place because of the constraint to have it be done in constant space?

Brute force solution-
Find the number of 0s in the array and fill the first indices with 0s, and the rest with 1s 
Complexity: O(n) - filter is O(n) to traverse the whole list, for loop is O(n) - no space required
*/

/* function sortBinaryArray(list) {
	const zeroCount = list.filter(x => x === 0).length;
	for (let i = 0; i < list.length; i++) {
		if (i < zeroCount) {
			list[i] = 0;
		} else {
			list[i] = 1;
		}
	}
	return list;
} */

function sortBinaryArray(list) {
	let k = 0;
	for (let i = 0; i < list.length; i++) {
		if (list[i] === 0) {
			list[k] = 0;
			k += 1;
		}
	}

	for (let i = k; i < list.length; i++) {
		list[k] = 1;
		k += 1;
	}
	return list;
}

const input1 = [1, 0, 1, 0, 1, 0, 0, 1];

console.log(sortBinaryArray(input1));
