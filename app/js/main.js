$(function() {

    $('.slider-top__inner').slick({
        dots: true,
        arrows: false

    })
    var mixer = mixitup('.products__items', {
        selectors: {
            control: '.products__btn'
        }
    });
    var mixer = mixitup('.news__items', {
        selectors: {
            control: '.news__btn'
        }
    });
});