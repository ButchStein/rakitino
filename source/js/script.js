let elem = document.getElementById('callto');
elem.addEventListener('click', function (e) {
    let el = document.querySelector('.header__form');
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
    } else {
        el.classList.add('hidden');
    }





});