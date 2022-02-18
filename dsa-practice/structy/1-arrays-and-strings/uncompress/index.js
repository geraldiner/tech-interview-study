// approach: Two Pointers

const uncompress = s => {
	let res = "";
	let p1 = 0;
	let p2 = 0;

	while (p2 < s.length) {
		if (s[p2].match(/[a-z]/i)) {
			res += s[p2].repeat(Number(s.slice(p1, p2)));
			p1 = p2 + 1;
		}
		p2 += 1;
	}
	return res;
};

// test cases
console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("4s2b")); // -> 'ssssbb'
console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
