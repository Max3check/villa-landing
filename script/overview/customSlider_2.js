const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let angle = 0;
let shift = 0;
let dataNext = [0, -50, 50];
let dataPrev = [0, -50, 50];

function prevSlide() {
	angle -= 120;
	shift = Math.abs((angle % 360) / 120);
	if (angle < 0) {
		slides.style.transform = `rotateY(${angle}deg) translateX(${
			-1 * dataNext[shift]
		}%)`;
	} else {
		slides.style.transform = `rotateY(${angle}deg) translateX(${dataNext[shift]}%)`;
	}
}

function nextSlide() {
	angle += 120;
	shift = Math.abs((angle % 360) / 120);
	// slides.style.transform = `rotateY(${angle}deg) translateX(${dataNext[shift]}%)`;

	if (angle < 0) {
		slides.style.transform = `rotateY(${angle}deg) translateX(${
			-1 * dataNext[shift]
		}%)`;
	} else {
		slides.style.transform = `rotateY(${angle}deg) translateX(${dataNext[shift]}%)`;
	}
}
