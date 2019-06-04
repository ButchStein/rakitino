let elem = document.getElementById('callto');
elem.addEventListener('click', function (e) {
	let el = document.querySelector('.header__form');
	if (el.classList.contains('hidden')) {
		el.classList.remove('hidden');
	} else {
		el.classList.add('hidden');
	}
});

window.onload = function () {
	let scrolled;
	let timer;

	document.querySelector('.section-seven__button').onclick = function () {
		scrolled = window.pageYOffset;
		scrollToTop();
	}
	function scrollToTop() {
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 2;
			timer = setTimeout(scrollToTop, 5);
		} else {
			clearTimeout(timer);
			window.scrollTo(0, 0);
		}
	}
}


