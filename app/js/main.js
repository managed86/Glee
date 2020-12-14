$(function() {


   $('.slider-top__inner').slick({
      dots: true,
      arrows: false

   })

   $('.menu__burger').on('click', function(event) {
      $('.menu__burger, .menu__list').toggleClass('active');
   });



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