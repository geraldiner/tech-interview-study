const input = ["a", "b", "c", "d", "e", "f"];

function recursive_print(strings, depth = "") {
	if (strings.length) {
		console.log(`${depth}<${strings[0]}>`);
		recursive_print(strings.slice(1), depth + "  ");
		console.log(`${depth}</${strings[0]}>`);
	}
}

recursive_print(input);
