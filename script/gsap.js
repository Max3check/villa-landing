log("GSAP");
// const log = console.log;

gsap.registerPlugin(ScrollTrigger);

gsap.to(".overview_typing", {
	// x: 500,
	// duration: 3,
	scrollTrigger: {
		trigger: ".overview_typing",
		start: "top 70%",
		// end: "bottom 50%",
		// markers: true,
		toggleClass: "rotateOnScroll",
	},
});
