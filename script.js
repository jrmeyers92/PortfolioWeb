// event listener for hamburger

const hamburger = document.querySelector(".hamburger--stand");
hamburger.addEventListener("click", () => {
	const navList = document.querySelector(".nav__list");
	hamburger.classList.toggle("is-active");

	if (hamburger.classList.contains("is-active")) {
		navList.classList.add("translate");
	} else if (!hamburger.classList.contains("is-active")) {
		navList.classList.remove("translate");
	}
});
