$('body').hide().fadeIn(1200); // плавное проявление всего контента на сайте при загрузке
$('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(target).offset().top - $('.header').height()
    }, 1500);
});