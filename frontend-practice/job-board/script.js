async function fetchJobs() {
	const url = "https://hacker-news.firebaseio.com/v0/jobstories.json";
	const res = await fetch(url);
	const data = await res.json();
	return data;
}

async function fetchMetadata(postID) {
	const url = `https://hacker-news.firebaseio.com/v0/item/${postID}.json`;
	const res = await fetch(url);
	const data = await res.json();
	return data;
}

let jobIDs;

const loadBtn = document.querySelector("#load-more-button");
loadBtn.addEventListener("click", getMoreJobs);

const jobBoard = document.querySelector("#job-board");

window.onload = async () => {
	jobIDs = await fetchJobs();

	const firstNine = jobIDs.splice(0, 9);
	for (let jobID of firstNine) {
		/* 
    <section class="job-card">
      <a class="job-link" href="">
        <h3>Company Name</h3>
        <p>Is hiring...</p>
        <span>Date</span>
      </a>
    </section>
    */

		// overall section
		createJobCard(jobID);
	}
};

async function getMoreJobs() {
	const nextSix = jobIDs.splice(0, 6);
	for (let jobID of nextSix) {
		createJobCard(jobID);
	}
}

async function createJobCard(jobID) {
	const metaData = await fetchMetadata(jobID);

	let section = document.createElement("section");
	section.classList.add("job-card");

	// this is so the card is clickable
	let aLink = document.createElement("a");
	aLink.classList.add("job-link");
	let url = metaData.url && metaData.url !== "" ? metaData.url : `https://news.ycombinator.com/item?id=${jobID}`;
	aLink.setAttribute("href", url);
	aLink.setAttribute("target", "_blank");

	const [companyName, position] = parseTitle(metaData.title);

	// company name
	let h3 = document.createElement("h3");
	h3.innerText = companyName;
	aLink.appendChild(h3);

	// is hiring...
	let p = document.createElement("p");
	p.innerText = position !== "" ? `Is hiring ${position}` : "Is hiring";
	aLink.appendChild(p);

	// date
	let span = document.createElement("span");
	span.innerText = parseDate(metaData.time);
	aLink.appendChild(span);

	// append aLink to section
	section.appendChild(aLink);
	// append section to job-board
	jobBoard.appendChild(section);
}

function parseTitle(title) {
	return title.split(/Hiring|Is Hiring|Is Looking For/i);
}

function parseDate(time) {
	const date = new Date(time * 1000);
	return date.toLocaleDateString();
}
