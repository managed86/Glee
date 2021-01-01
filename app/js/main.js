$(function() {


   $(window).on('scroll', function() {

      if ($(this).scrollTop() > window.innerHeight * 0.7) {
         $('.menu').addClass('fixed');
      } else {
         $('.menu').removeClass('fixed');
      }

   });


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

   $('.detalis-slide__thumb').slick({
      asNavFor: '.detalis-slide__big',
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      draggable: false



   });

   $('.detalis-slide__big').slick({
      asNavFor: '.detalis-slide__thumb',
      draggable: false,
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

   $(".detalis__star").rateYo({
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      starWidth: "18px",
      spacing: "13px"
   });

   $('.count__minus').on('click', function() {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.onchange();
      return false;
   });
   $('.count__plus').on('click', function() {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.onchange();
      return false;
   });


   $('.related-slider__wrapper').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,

      prevArrow: $('.related-slider__prev'),
      nextArrow: $('.related-slider__next')
   });


   $('.products__item--list .products__item-menu').hide();
   $('.products__item-box-link').on('click', function(event) {
      $(this).css("display", "none");
      $(this).next().toggle()
   });


   if ($('.pagination__link--active')) {
      $('.pagination__link--active').parents('.pagination__item').addClass('pagination__item--active');
   }

   $('.detalis-tabs__item').on('click', function(e) {
      e.preventDefault();
      $('.detalis-tabs__item').removeClass('detalis-tabs__item--active');
      $(this).addClass('detalis-tabs__item--active');

      $('.detalis-tabs__box').removeClass('detalis-tabs__box--active');
      $($(this).attr('href')).addClass('detalis-tabs__box--active');
   });



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