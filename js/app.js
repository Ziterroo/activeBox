$(function () {

    /* fixed header */
    let header = $('#header');
    let intro = $('#intro');
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });

    let nav = $('#nav');

    /* smooth scroll */
    $('[data-scroll]').on('click', function (e) {
        e.preventDefault();
        nav.removeClass('show');
        let navId = $(this).data('scroll');
        let elementOffset = $(navId).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset - 75
        }, 700);
    });

    /* menu */
    $('#menu').on('click', function (e) {
        e.preventDefault();
        nav.toggleClass('show');
    });

    /* Reviews */
    let slider = $('#reviewSlider');
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});