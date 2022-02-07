const jobList = document.querySelector("#job-listings");

async function fetchJsonData() {
	const res = await fetch("./data.json");
	const jsonData = await res.json();
	return jsonData;
}

window.onload = async () => {
	const data = await fetchJsonData();
	for (let d of data) {
		const { id, company, logo, featured, position, role, level, postedAt, contract, location, languages, tools } = d;
		const isNew = d.new;

		// create job card
		const jobCard = document.createElement("section");
		jobCard.classList.add("job-card");
		if (featured) jobCard.classList.add("featured");

		// create job icon
		const jobIcon = document.createElement("section");
		jobIcon.classList.add("job-icon");
		const iconImg = document.createElement("img");
		iconImg.src = logo;

		jobIcon.appendChild(iconImg);

		jobCard.appendChild(jobIcon);

		// create details section
		const jobDeets = document.createElement("section");
		jobDeets.classList.add("job-details");

		// create top details
		const deetsP = document.createElement("p");
		deetsP.classList.add("top-details");
		const compName = document.createElement("span");
		compName.classList.add("company-name");
		compName.innerText = company;
		deetsP.appendChild(compName);

		if (isNew) {
			const newTag = document.createElement("span");
			newTag.classList.add("top-tag", "new-tag");
			newTag.innerText = "New!";
			deetsP.appendChild(newTag);
		}
		if (featured) {
			const featuredTag = document.createElement("span");
			featuredTag.classList.add("top-tag", "featured-tag");
			featuredTag.innerText = "Featured";
			deetsP.appendChild(featuredTag);
		}

		jobDeets.appendChild(deetsP);

		const posName = document.createElement("p");
		posName.classList.add("position-name");
		posName.innerText = position;

		jobDeets.appendChild(posName);

		jobCard.append(jobDeets);

		jobList.appendChild(jobCard);
	}
};
