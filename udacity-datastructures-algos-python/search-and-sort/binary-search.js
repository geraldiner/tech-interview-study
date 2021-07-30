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
	let temp = arr;
	while (temp.length != 1) {
		let half = Math.floor(temp.length/2);
		if (val == temp[half]) {
			return half;
		} else if (val < temp[half]) {
			temp = temp.slice(0,half);
		} else {
			temp = temp.slice(half+1);
		}
	}
	if (temp.length == 1) {
		if (val > temp[0]) {
			return -1
		} else {
			return arr.indexOf(temp[0])
		}
	}
}

let test_list = [1,3,9,11,15,19,29]
let test_val1 = 25
let test_val2 = 15
console.log(binary_search(test_list, test_val1)) // -1
console.log(binary_search(test_list, test_val2)) // 4