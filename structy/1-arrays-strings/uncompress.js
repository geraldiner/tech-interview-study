// approach: Two Pointers
//

const uncompress = s => {
	// @param: s - string to "uncompress", every 2 chars follows <letter><number> pattern
	// --- first char could take up 1+ chars bc of multi-digit numbers
	// @return: result - "uncompressed" string, every letter printed out <number> of times

	// instantiate result string
	// for every 2 chars in s length?
	// access every 2 chars
	// access first char and use .repeat() with second char

	let result = "";

	return s;
};

// test cases
console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("4s2b")); // -> 'ssssbb'
console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
