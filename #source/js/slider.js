$('.main-slider').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
});

$('.main-slider__next').on('click', function() {
  $('.main-slider').slick('slickNext');
});
$('.main-slider__prev').on('click', function() {
  $('.main-slider').slick('slickPrev');
});

$('.lots-slider').slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 583,
        settings: {
          slidesToShow: 1
        }
      }
    ]
});

$('.lots__next').on('click', function() {
  $('.lots-slider').slick('slickNext');
});
$('.lots__prev').on('click', function() {
  $('.lots-slider').slick('slickPrev');
});

$('.quote-slider').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
});

$('.quote-slider__prev').on('click', function() {
  $('.quote-slider').slick('slickPrev');
});

var value = 0;

var i = 180;
$('.quote-slider__prev').click(function(){
   $(this).css("transform","rotate("+i+"deg)");
   i += 180;
});

$('#icon').click(function(){
   $(this).css("transform","rotate("+180+"deg)");
});