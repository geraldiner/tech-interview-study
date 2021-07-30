// """You're going to write a binary search function.
// You should use an iterative approach - meaning
// using loops.
// Your function should take two inputs:
// a list to search through, and the value
// you're searching for.
// Assume the list only has distinct elements,
// meaning there are no repeated values, and 
// elements are in a strictly increasing order.
// Return the index of value, or -1 if the value
// doesn't exist in the list."""

function binary_search(arr, val) {
	let high = arr.length - 1;
	let low = 0;
	let mid = 0;
	while (low <= high) {
		mid = Math.floor((low+high)/2);
		if (val == arr[mid]) {
			return mid;
		} else if (val < arr[mid]) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return -1;
}

let test_list = [1,3,9,11,15,19,29]
let test_val1 = 25
let test_val2 = 15
console.log(binary_search(test_list, test_val1)) // -1
console.log(binary_search(test_list, test_val2)) // 4