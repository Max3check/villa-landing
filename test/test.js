const log = console.log;
gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
	// x: 500,
	duration: 3,
	scrollTrigger: {
		trigger: ".square",
		start: "top 30%",
		end: "50% 20%",
		markers: true,
		toggleClass: "red",
	},
});
