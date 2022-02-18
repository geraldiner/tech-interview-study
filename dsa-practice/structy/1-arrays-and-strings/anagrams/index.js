function anagrams(s1, s2) {
	if (s1.length !== s2.length) return false;
	const countChars = str => {
		let countMap = {};
		for (let char of str) {
			countMap[char] = countMap[char] ? countMap[char] + 1 : 1;
		}
		return countMap;
	};

	const s1Counts = countChars(s1);
	const s2Counts = countChars(s2);

	for (let char in s1Counts) {
		if (s1Counts[char] !== s2Counts[char]) return false;
	}
	return true;
}

console.log(anagrams("restful", "fluster")); // -> true
console.log(anagrams("cats", "tocs")); // -> false
console.log(anagrams("paper", "reapa")); // -> false
console.log(anagrams("monkeyswrite", "newyorktimes")); // -> true
