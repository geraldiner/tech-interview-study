/* Given a collection of numbers, find the matching pair that is equal to the given sum.

Ex: [1,2,3,9]; sum = 8 - no pairs
Ex: [1,2,4,4]; sum = 8 - (4,4)

How should the result be returned?
What about duplicate elements?
Will they all be integers? Floating?
Will there be negatives or positives?
Will the list already be sorted?
Will there be multiple pairs?

Discuss the brute force solution-
Nested for loop where the first loop starts at i = 0, and the second loop starts at j = i + 1, so we don’t hit the same number twice
** Mention complexity- nested for loop is O(n^2)

Binary search solution
Use a for loop to go through each number, then use binary search on the rest of the list to look for the number that would equal the sum
Complexity: binary search is O(log n) in a sorted list**

Hashmap solution
Create a hashmap where the key is the element from the list and the value is the number that when added equals to the sum, or sum-element */

function findSumPair(list, sum) {
	let complements = new Set();
	let pairs = [];
	for (let el of list) {
		if (complements.has(sum - el)) {
			pairs.push(`(${el}, ${sum - el})`);
		}
		complements.add(el);
	}
	return pairs.length === 0;
}

const input1 = [1, 2, 3, 9];
const input2 = [8, 7, 2, 5, 3, 1];
const input3 = [5, 2, 6, 8, 1, 9];
const input4 = [1, 2, 4, 4];

findSumPair(input1, 8);
findSumPair(input2, 10);
findSumPair(input3, 12);
findSumPair(input4, 8);
