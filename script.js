// event listener for hamburger

const hamburger = document.querySelector(".hamburger--stand");
const navList = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("is-active");

	if (hamburger.classList.contains("is-active")) {
		navList.classList.add("translate");
	} else if (!hamburger.classList.contains("is-active")) {
		navList.classList.remove("translate");
	}
});

// event listener to close hamburger touching body

document.body.addEventListener("click", (event) => {
	if (!hamburger.classList.contains("is-active")) {
		return;
	}

	if (
		event.target.classList.contains("hamburger") ||
		event.target.classList.contains("hamburger-inner") ||
		event.target.classList.contains("hamburger-box") ||
		event.target.classList.contains("hamburger--stand")
	) {
		return;
	} else {
		navList.classList.remove("translate");
		hamburger.classList.remove("is-active");
	}
});
