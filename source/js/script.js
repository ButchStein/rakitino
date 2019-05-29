let elem = document.getElementById('callto');
elem.addEventListener('click', function (e) {
	let el = document.querySelector('.header__form');
	if (el.classList.contains('hidden')) {
		el.classList.remove('hidden');
	} else {
		el.classList.add('hidden');
	}
});

let scrollUp = document.querySelector('.section-seven__button');
let t;

scrollUp.addEventListener('click', function () {
	scrolltop();
	function scrolltop() {
		let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
		if (top > 0) {
			window.scrollTo(0, -20);
			t = setTimeout("scrolltop()", 30);
		} else {
			clearTimeout(t);
		} return false;
	};
});