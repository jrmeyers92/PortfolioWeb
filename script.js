//event listener for welcome screen

document.addEventListener("DOMContentLoaded", (e) => {
	const splash = document.querySelector(".splash");
	setTimeout(() => {
		splash.classList.add("display-none");
	}, 1500);
});

// event listener for hamburger

const hamburger = document.querySelector(".hamburger--stand");
const navList = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("is-active");

	if (hamburger.classList.contains("is-active")) {
		navList.classList.add("translate");
		navList.classList.add("show");
	} else if (!hamburger.classList.contains("is-active")) {
		navList.classList.remove("translate");
		navList.classList.remove("show");
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

// event listener for modal
document.getElementById("contactMe").addEventListener("click", () => {
	const modal = document.getElementById("modal");
	modal.classList.add("show");
	// modal.classList.add("translateX");
});

const modalExit = document.getElementById("modal__exit");
modalExit.addEventListener("click", () => {
	modal.classList.remove("show");
});

// event listener to pop up video of Doubelshot website
document
	.getElementById("doubleShot_button")
	.addEventListener("click", (e) => {});
