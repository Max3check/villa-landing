var i = 0;
var txt =
	"Насладитесь современными удобствами в спокойной обстановке."; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
log("overview");
function typeWriter() {
	if (i < txt.length) {
		document.querySelector(".overview_typing").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
typeWriter();
