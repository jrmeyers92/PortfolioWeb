//animations
const timeline = gsap.timeline({ defaults: { duration: 0.8 } });
timeline
	.from(".home__h2", { y: "-1000%", opacity: 0, ease: "bounce" })
	.from(".home__h3", { x: "-500%", ease: "back" })
	.from(".nav__item", { opacity: 0, stagger: 0.5 });

gsap.from(".nav__block", { opacity: 0, duration: 3, delay: 2 });

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

// event listener for form submit

const formBtn = document.getElementById("form-submit");
formBtn.addEventListener("click", async () => {
	await fetch(
		"https://cors-anywhere.herokuapp.com/https://us-central1-jake-meyers-web-dev-portfolio.cloudfunctions.net/sendMail"
	)
		.then((res) => console.log(res))
		.catch((err) => console.log({ err }));
});

// event listener for modal
formBtn.addEventListener("click", () => {
	const modal = document.getElementById("modal");
	modal.classList.add("show");
});

const modalExit = document.getElementById("modal__exit");
modalExit.addEventListener("click", () => {
	modal.classList.remove("show");
});
