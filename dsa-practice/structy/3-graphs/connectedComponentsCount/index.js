const connectedComponentsCount = graph => {
	// create a new Set to keep track of what's already been visited- avoid cycles, Set has add, check methods that run in constant time
	const visited = new Set();

	// count the number of components
	let count = 0;

	// go through every node in the graph
	for (let node in graph) {
		// if the explore function goes through and returns true, we can increase the count by 1
		if (explore(graph, node, visited)) {
			count += 1;
		}
	}

	// return the count
	return count;
};

const explore = (graph, current, visited) => {
	// if it's a number that's already been visited return false
	// use String() to make sure all the elements are the same type (keys vs values)
	if (visited.has(String(current))) return false;

	// if it hasn't been seen, but it is seen now, add to the Set
	visited.add(String(current));

	// go through the neighbors of the current node and do the same thing
	for (let neighbor of graph[current]) {
		explore(graph, neighbor, visited);
	}

	// if we got through the entire for loop, return true for reaching an entire component
	return true;
};

const count1 = connectedComponentsCount({
	0: [8, 1, 5],
	1: [0],
	5: [0, 8],
	8: [0, 5],
	2: [3, 4],
	3: [2, 4],
	4: [3, 2],
}); // -> 2
console.log(count1);

const count2 = connectedComponentsCount({
	1: [2],
	2: [1, 8],
	6: [7],
	9: [8],
	7: [6, 8],
	8: [9, 7, 2],
}); // -> 1

console.log(count2);
