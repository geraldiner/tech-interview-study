// """Implement a function recursively to get the desired
// Fibonacci sequence value.
// Your code should have the same input/output as the 
// iterative code in the instructions."""

function get_fib(pos) {
	if (pos < 0) { return -1 }
	if (pos === 0 || pos === 1) { return pos }
	return get_fib(pos - 1) + get_fib(pos - 2);
}

// # Test cases
console.log(get_fib(9))
console.log(get_fib(11))
console.log(get_fib(0))
