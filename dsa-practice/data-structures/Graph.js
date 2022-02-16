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

function bfsPrint(graph, source) {
	if (!source) {
		source = Object.keys(graph)[0];
	}
	const queue = [source];
	while (queue.length > 0) {
		const curr = queue.shift();
		console.log(curr);
		for (let neighbor of graph[curr]) {
			queue.push(neighbor);
		}
	}
}

function dfsPrintRecursive(graph, source) {
	if (!source) {
		source = Object.keys(graph)[0];
	}
	console.log(source);
	for (let neighbor of graph[source]) {
		dfsPrintRecursive(graph, neighbor);
	}
}

const graph = {
	a: ["c", "b"],
	b: ["d"],
	c: ["e"],
	d: ["f"],
	e: [],
	f: [],
};

dfsPrint(graph);
bfsPrint(graph);
dfsPrintRecursive(graph);
