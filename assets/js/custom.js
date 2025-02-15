$('.product_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product_slider_nav'
  });
  $('.product_slider_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product_slider',
    dots: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });
  $('.product_slider_nav li').html('');