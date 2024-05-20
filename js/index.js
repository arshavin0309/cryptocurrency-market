const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

document.addEventListener('DOMContentLoaded', () => {
    let goTopBtn = document.querySelector('.upButton');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

    function trackScroll() {
        let scrolled = window.pageYOffset;

        if (scrolled > 100) {
            goTopBtn.classList.add('show');
        }
        if (scrolled < 100) {
            goTopBtn.classList.remove('show');
        }
    }

    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
})