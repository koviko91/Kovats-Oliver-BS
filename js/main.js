$(document).ready(function () {
    $('#download').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('#ketto').offset().top
        }, 300);
    });
    $('#features').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('#harom').offset().top
        }, 300);
    });
    $('#contact').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('#ot').offset().top
        }, 300);
    });
    $(window).on('scroll', function () {
        if (this.scrollY > 300) {
            document.querySelector('nav').classList.add('body-scrolled');

        } else {
            document.body.querySelector('nav').classList.remove('body-scrolled');

        }
    });
});