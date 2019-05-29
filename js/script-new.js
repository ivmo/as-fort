// new WOW().init();

wow = new WOW({
  mobile: false
})
wow.init();

$('.mobile-menu-btn').on('click', function () {
  $('.aside').addClass('aside--active');
});

$('.aside-inner-close').on('click', function () {
	$('.aside').removeClass('aside--active');
});

$('.aside').on('click', function (e) {
	if ($(e.target).is(this)) {
        $('.aside').removeClass('aside--active');
      }
});

$('.plus-btn').on('click', function () {
  $(this).toggleClass('plus-btn-open');
  $(this).siblings('ul').toggleClass('submenu-open');
});

$('.form-group__input--flyaway').focus(function(){
        $(this).parents('.form-group').addClass('focused');
      });

      $('.form-group__input--flyaway').blur(function(){
        var inputValue = $(this).val();
        if ( inputValue == "" ) {
          $(this).removeClass('filled');
          $(this).parents('.form-group').removeClass('focused');
        } else {
          $(this).addClass('filled');
        }
      });

  $('[data-fancybox]').fancybox({
	  loop: true
  });

  jQuery('.tel-mask').mask('+7(999)999-99-99');

  $( document ).ready(function() {

    var sizer = '.sizer3';
    var container = $('#gallery');

    container.imagesLoaded(function(){
        container.masonry({
            itemSelector: '.item-masonry',
            columnWidth: sizer,
            gutter: '.gutter-sizer',
            percentPosition: true
        });
    });

    $('.js_message-close').on('click', function () {
      $('.js_message-sent').removeClass('message-sent--show');
    });


});