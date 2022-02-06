async function fetchNums() {
	const url = "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";
	const res = await fetch(url);
	const data = await res.text();
	return data;
}

function parseNums(data) {
	let numsArr = data.split("\n").filter(x => x !== "");
	let counts = {};
	for (let n of numsArr) {
		if (counts.hasOwnProperty(n)) {
			counts[n] += 1;
		} else {
			counts[n] = 1;
		}
	}
	return counts;
}

window.onload = async function () {
	const data = await fetchNums();
	const counts = parseNums(data);

	// Get elements from DOM
	const xAxis = document.querySelector("#x-axis");
	const yAxis = document.querySelector("#y-axis");
	const bars = document.querySelector("#bars");

	// Set up x-axis with range of values (min to max)
	const maxRange = Math.max(...Object.keys(counts));

	// Set up y-axis with range of counts
	const maxCount = Math.max(...Object.values(counts));

	// Create and display y-axis
	const yAxisLine = document.createElement("div");
	yAxisLine.classList.add("axis");
	yAxisLine.style.height = `${maxCount * 20}px`;
	yAxisLine.style.width = "2px";

	yAxis.appendChild(yAxisLine);

	// Create and display x-axis
	const xAxisLine = document.createElement("div");
	xAxisLine.classList.add("axis");
	xAxisLine.style.width = `${maxRange * 30}px`;
	xAxisLine.style.height = "3px";

	const labels = document.createElement("div");
	labels.classList.add("x-labels");
	for (let i of Object.keys(counts)) {
		let label = document.createElement("span");
		label.classList.add("label");
		label.innerText = i;
		label.style.left = `${i * 25}px`;
		labels.appendChild(label);
	}
	xAxis.appendChild(xAxisLine);
	xAxis.appendChild(labels);

	// Create a bar for each number
	let last = 0;
	for (let num in counts) {
		const bar = document.createElement("div");
		bar.classList.add("bar");
		bar.style.left = `${num * 25}px`;
		bar.style.height = `${counts[num] * 10}px`;
		bars.append(bar);
	}
};
