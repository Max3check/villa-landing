let currentIndex = 0;

const slides = document.querySelector(".slides");

// function showSlide(index, nextFlag, prevFlag) {
function showSlide(index, flag) {
	const slideWidth = document.querySelector(".slide").clientWidth;
	slides.style.transform = `translateX(${-index * slideWidth}px)`;
	if (flag) {
		slides.style.transition = "none";
	} else {
		slides.style.transition = "transform 0.5s ease-in-out";
	}
	currentIndex = index;
}

function nextSlide() {
	let nextFlag = false;
	const totalSlides = document.querySelectorAll(".slide").length;
	currentIndex = (currentIndex + 1) % totalSlides;
	log(`currentIndex from next button: ${currentIndex}`);
	// log(`nextFlag: ${nextFlag}`);

	if (currentIndex === 0) {
		nextFlag = true;
		// slides.style.transition = "none";
	} else {
		nextFlag = false;
	}

	showSlide(currentIndex, nextFlag);
}

function prevSlide() {
	let prevFlag = false;
	const totalSlides = document.querySelectorAll(".slide").length;
	currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
	log(`currentIndex from prev button: ${currentIndex}`);

	if (currentIndex === 2) {
		prevFlag = true;
		// slides.style.transition = "none";
	} else {
		prevFlag = false;
	}

	showSlide(currentIndex, prevFlag);
}
