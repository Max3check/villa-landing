const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let step = 0;
// let countStep = 120;
let index = 0;
let indexPrev = 0;
let count = 0;
let countPrev = 0;
let rot = [0, -50, 50];
//       360  120  240
//       720  480  600
//      1080  840  960
// let rot = [-50, 50, 0, 0, -50, 50];
// [0, -50, 50]
let rotPrev = [50, -50, 0];

function prevSlide() {
	log(`prevSlide`);
	step -= 120;
	// count === 0
	// 	? (countPrev = 0)
	// 	: count === 1
	// 	? (countPrev = 2)
	// 	: (countPrev = 1);
	index--;
	count = Math.abs(index + 3) % 3;
	slides.style.transform = `rotateY(${step}deg) translateX(${rot[count]}%)`;
	// index++;
	// count = index % 3;
	// indexPrev++;
	// countPrev = indexPrev % 3;

	log(`index prev: ${index}`);
	log(`count prev: ${count}`);
}

function nextSlide() {
	log(`nextSlide`);
	step += 120;
	index++;
	count = index % 3;

	slides.style.transform = `rotateY(${step}deg) translateX(${rot[count]}%)`;
	// countStep = step % 360;
	// countStep === 0 ? (countStep = 360) : null;
	// index = count;
	log(`index next: ${index}`);
	log(`count next: ${count}`);
	log(`step next: ${step}`);
}
// log(images);
