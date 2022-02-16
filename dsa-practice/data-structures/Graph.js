function dfsPrint(graph, source) {
	if (!source) {
		source = Object.keys(graph)[0];
	}
	const stack = [source];
	while (stack.length > 0) {
		const curr = stack.pop();
		console.log(curr);
		for (let neighbor of graph[curr]) {
			stack.push(neighbor);
		}
	}
}

const graph = {
	a: ["b", "c"],
	b: ["d"],
	c: ["e"],
	d: ["f"],
	e: [],
	f: [],
};

dfsPrint(graph);
