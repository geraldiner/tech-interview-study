function frequencySort(s) {
	const freq = {};
	for (let char of s) {
		freq[char] = (freq[char] || 0) + 1;
	}

	const sortedChars = Object.keys(freq).sort((a, b) => {
		const diff = freq[b] - freq[a];
		return diff === 0 ? b.localeCompare(a) : diff;
	});

	return sortedChars.reduce((acc, curr) => acc + curr.repeat(freq[curr]), "");
}

console.log(frequencySort("tree")); // eert or eetr
console.log(frequencySort("cccaaa")); // cccaaa or aaaccc
console.log(frequencySort("Aabb")); // bbaA or bbAa
