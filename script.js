// gsap opening animations

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".nav__block", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(
	".home__headings",
	{ opacity: 0 },
	{ opacity: 1, duration: 1 },
	"-=1"
);

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
