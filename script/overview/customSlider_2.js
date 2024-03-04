const slides = document.querySelector(".slides");
// log(`slides: ${slides.children.length}`);
// log(slides.children);
const images = document.querySelectorAll(".slides img");

function prevSlide() {
	log(`prevSlide`);
}
let step = 120;
let index = 0;
let count = 0;
// let rot = -50;
let rot = [-50, 50, 0];
function nextSlide() {
	log(`nextSlide`);
	slides.style.transform = `rotateY(${step}deg) translateX(${rot[count]}%)`;
	// slides.style.transform = `rotateY(${step}deg)`;
	step += 120;
	index++;
	count = index % 3;
	// rot += 100;
	// images.forEach((el, index) => {
	// 	if (el.index === 0) {
	// 		el.index = 3;
	// 	}
	// return step;
}

// setTimeout(() => {
// if (step === 360) {
// 	step = 0;
// }
// }, 300);
// });
// images.forEach((el, index) => {
// 	log(el);
// 	el.style.zIndex = "" + index;
// });
// log(images);
// function addZindex(el) {
// 	el.style.zIndex = 1;
// }

// images
log(images);
// images.forEach((el, index) => {
// 	log(el);
// 	el.style.zIndex = "" + index;
// });
