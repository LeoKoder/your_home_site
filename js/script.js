$(".sl_banner").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    pauseOnDotsHover: true,
    dots: true,
    dotsClass: 'slick-dots slider__dots',
  customPaging: function(slick, index) {
    var image = $(slick.$slides[index]).find('.slider__img').attr('src');
    return '<img src="' + image + '" alt="" /> '
  }
});