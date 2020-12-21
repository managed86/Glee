$(function() {


   $(".filter-price__input").ionRangeSlider({
      type: "double",
      prefix: "$",
      postfix: ".00",
      onStart: function(data) {
         $('.fitper-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },

      onChange: function(data) {
         $('.fitper-price__from').text(data.from);
         $('.filter-price__to').text(data.to);

      }
   });

   $('.slider-top__inner').slick({
      dots: true,
      arrows: false
   });

   $(".star").rateYo({
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      starWidth: "11px",
      spacing: "5px"
   });

   $(".products__star").rateYo({
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      starWidth: "18px",
      spacing: "13px"

   });


   $('.products__item--list .products__item-menu').hide();
   $('.products__item-box-link').on('click', function(event) {
      $(this).css("display", "none");
      $(this).next().toggle()
   });


   if ($('.pagination__link--active')) {
      $('.pagination__link--active').parents('.pagination__item').addClass('pagination__item--active');
   }




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