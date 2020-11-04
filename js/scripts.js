$(function(){
  let bool = true;
  $(".direct-links__item").click(function(){
    $(".direct-links__item").removeClass('direct-active');
    $(".direct-links__item").addClass('direct-passive');
    $(this).addClass('direct-active');
    $(this).removeClass('direct-passive');
    if($(this).hasClass("closed"))
    {
      if($(".direct-links__item").hasClass("opened"))
      {

        $(".direct-links__item").find(".toggled").hide(400);
      }
      $(".direct-links__item").removeClass('opened');
      $(".direct-links__item").addClass('closed');
      $(this).addClass("opened").find(".toggled").show(400);
      $(this).removeClass("closed");

    }
    else if($(this).hasClass("opened"))
    {
      $(this).find(".toggled").hide(400);
      $(this).removeClass('opened');
      $(this).addClass('closed');
    }

  });
  $('.slide-text').slick({
    dots: true,
    arrows: false,
    cssEase: 'linear',
    autoplay: true,
  });

  $('.review-text').slick({
    dots: true,
    arrows: false,
    fade: false,
    cssEase: 'linear',
    autoplay: true,
  });
  $('.slide-text').slick('slickGoTo', 1);

  $(".direct-links__item").click(function(){
    let idGallery = $(this).data('id');
        $('.slide-text').slick('slickGoTo', idGallery);
  });

  $(".drop-menu").hover(function() {
  var isHovered = $(this).is(":hover");
  if (isHovered) {
    $(this).children("ul").stop().show(500);
  } else {
    $(this).children("ul").stop().hide(500);
  }
  });

  let btn = $('#get_up');
  let icons = $('#fixed-items');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
       btn.show(300);
       icons.show(300);
     } else {
       btn.hide(300);
       icons.hide(300);
     }
   });
   btn.on('click', function(e) {
    $('html, body').animate({scrollTop:0}, '500');
  });
  $('.mobile-drop-down').click(function(){
    $('.second-cat').toggle(700);
    if(bool)
    {
      $('.mobile__items').css('padding-top', '0');
      bool = false;
    }
    else {
      $('.mobile__items').css('padding-top', '50px');
      bool = true;
    }
  });
  $('#mobile-menu-exit').click(function(){
      $('#mobile-menu').hide(400);
  });
  $('.mobile-menu-icon').click(function(){
      $('#mobile-menu').show(400);
  });

});
