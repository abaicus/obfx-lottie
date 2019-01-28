console.log(lottie);
lottie.loadAnimation({
	container: document.getElementById('lottie'), // the dom element that will contain the animation
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: './obfx/data.json' // the path to the animation json
});
