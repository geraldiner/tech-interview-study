const largestComponent = graph => {
	const visited = new Set();
	let largest = 0;
	for (let node in graph) {
		largest = Math.max(largest, explore(graph, node, visited));
	}
	return largest;
};

const explore = (graph, node, visited) => {
	if (visited.has(String(node))) return 0;
	visited.add(String(node));

	let size = 1;

	for (let neighbor of graph[node]) {
		size += explore(graph, neighbor, visited);
	}
	return size;
};

const size1 = largestComponent({
	0: ["8", "1", "5"],
	1: ["0"],
	5: ["0", "8"],
	8: ["0", "5"],
	2: ["3", "4"],
	3: ["2", "4"],
	4: ["3", "2"],
}); // -> 4

console.log(size1);
