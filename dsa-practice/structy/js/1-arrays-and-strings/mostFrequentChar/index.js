function mostFrequentChar(s) {
	let charCounts = {};
	for (let char of s) {
		charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
	}

	let maxCount = charCounts[s[0]];
	let maxLetter = s[0];
	for (let i = 1; i < s.length; i++) {
		if (charCounts[s[i]] > maxCount) {
			maxCount = charCounts[s[i]];
			maxLetter = s[i];
		}
	}
	return maxLetter;
}

console.log(mostFrequentChar("bookeeper")); // -> 'e'
console.log(mostFrequentChar("david")); // -> 'd'
console.log(mostFrequentChar("mississippi")); // -> 'i'
