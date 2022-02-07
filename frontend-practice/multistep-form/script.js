const screens = ["name", "email", "birthday", "password", "success"];
let screenNum = 0;

let data = {
	"name": "",
	"email": "",
	"birthday": "",
	"password": "",
};

// Get buttons from DOM
const backBtn = document.querySelector("#back-button");
const nextBtn = document.querySelector("#next-button");
const submitBtn = document.querySelector("#submit-button");

// Get sections from DOM
const backBtnSection = document.querySelector("#back-button-section");
const nextBtnSection = document.querySelector("#next-button-section");

nextBtn.addEventListener("click", e => {
	e.preventDefault();
	const currentInput = document.querySelector(`input#${screens[screenNum]}`);
	if (currentInput.value !== "") {
		data[screens[screenNum]] = currentInput.value;
		console.log(data);
		const currentSection = document.querySelector(`#${screens[screenNum]}-section`);
		if (!currentSection.classList.contains("hidden")) {
			currentSection.classList.add("hidden");
		}
		screenNum += 1;
		const nextSection = document.querySelector(`#${screens[screenNum]}-section`);
		if (nextSection.classList.contains("hidden")) {
			nextSection.classList.remove("hidden");
		}
		if (screenNum > 0) {
			backBtnSection.classList.remove("hidden");
		}
		if (screenNum === 3) {
			nextBtn.classList.add("hidden");
			submitBtn.classList.remove("hidden");
		} else {
			nextBtn.classList.remove("hidden");
			submitBtn.classList.add("hidden");
		}
	} else {
		alert(`Please input your ${screens[screenNum]} before moving on.`);
	}
});

backBtn.addEventListener("click", e => {
	e.preventDefault();
	const currentSection = document.querySelector(`#${screens[screenNum]}-section`);
	if (!currentSection.classList.contains("hidden")) {
		currentSection.classList.add("hidden");
	}
	screenNum -= 1;
	if (screenNum >= 0) {
		const prevSection = document.querySelector(`#${screens[screenNum]}-section`);
		if (prevSection.classList.contains("hidden")) {
			prevSection.classList.remove("hidden");
		}
		if (screenNum > 0) {
			backBtnSection.classList.remove("hidden");
		} else {
			backBtnSection.classList.add("hidden");
		}
	}
});

submitBtn.addEventListener("click", handleSubmit);

function handleSubmit() {
	// submit data
	const form = document.querySelector("#form");
	form.classList.add("hidden");
	const success = document.querySelector(".success");
	success.classList.remove("hidden");
}
