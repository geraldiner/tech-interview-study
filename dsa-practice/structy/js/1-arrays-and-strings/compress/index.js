// Approach: Two Pointers

function compress(s) {
	let res = "";
	let p1 = 0;
	let p2 = 0;

	while (p2 <= s.length) {
		if (s[p2] !== s[p1]) {
			res += p2 - p1 === 1 ? s[p1] : `${p2 - p1}${s[p1]}`;
			p1 = p2;
		}
		p2 += 1;
	}
	return res;
}

console.log(compress("ccaaatsss")); // -> '2c3at3s'
console.log(compress("ssssbbz")); // -> '4s2bz'
console.log(compress("ppoppppp")); // -> '2po5p'
