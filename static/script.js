document.addEventListener('DOMContentLoaded', function () {

    const contactHeading = document.querySelector('#contact-us');
    const navHeading = document.querySelector('.nav-heading');

    document.addEventListener('scroll', function () {
        if (window.scrollY == 0 || window.scrollY < 60) {
            contactHeading.classList.remove('scroll-hide');
            navHeading.classList.remove('scroll-show');
            navHeading.classList.add('scroll-hide');
            contactHeading.classList.add('scroll-show');
        }
        else {
            contactHeading.classList.remove('scroll-show');
            navHeading.classList.remove('scroll-hide');
            navHeading.classList.add('scroll-show');
            contactHeading.classList.add('scroll-hide');
        }
    });
});
