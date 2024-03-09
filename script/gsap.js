log("GSAP");
// const log = console.log;

gsap.registerPlugin(ScrollTrigger);

gsap.to(".overview_typing", {
	// x: 500,
	// duration: 3,
	scrollTrigger: {
		trigger: ".overview_typing",
		start: "top 85%",
		end: "bottom 10%",
		toggleActions: "restart reverse",
		markers: true,
		toggleClass: "rotateOnScroll",
	},
});
