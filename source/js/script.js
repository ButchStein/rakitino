let elem = document.getElementById('callto');
elem.addEventListener('click', function (e) {
	let el = document.querySelector('.header__form');
	if (el.classList.contains('hidden')) {
		el.classList.remove('hidden');
	} else {
		el.classList.add('hidden');
	}
});

// window.onload = function () {
// 	let scrolled;
// 	let timer;

// 	document.querySelector('.section-seven__button').onclick = function () {
// 		scrolled = window.pageYOffset;
// 		scrollToTop();
// 	}
// 	function scrollToTop() {
// 		if (scrolled > 0) {
// 			window.scrollTo(0, scrolled);
// 			scrolled = scrolled - 2;
// 			timer = setTimeout(scrollToTop, 10);
// 		} else {
// 			clearTimeout(timer);
// 			window.scrollTo(0, 0);
// 		}
// 	}
// }
// window.onload = function () {
// 	document.querySelector('.section-seven__button').onclick = function () {
		

// 	}
// 	var scrollAnimate = function (to, duration) {
// 		if (duration <= 0) return;
// 		var difference = to - window.pageYOffset;
// 		var perTick = (difference / duration) * 10;

// 		setTimeout(function () {
// 			window.scrollTo(0, window.pageYOffset + perTick);
// 			if (window.pageYOffset === to) return;
// 			scrollAnimate(to, duration - 10);
// 		}, 10);
// 	}
// }

$(document).ready(function(){
	$('.section-seven__button').on('click', function(event) {

    var target = $( $(this) );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }

});
});
