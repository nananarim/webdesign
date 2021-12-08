$(function(){
    $('.menu').mouseover(function(){
        $(this).children('.sub_menu').stop().slideDown();
    });
    $('.menu').mouseout(function(){
        $(this).children('.sub_menu').stop().slideUp();
    });
});


$(".slide > div:gt(0)").hide();
  setInterval(function(){
      $('.slide > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.slide');
  },3000);



$('.gallery_title').click(function(){
    $('.gallery').show();
    $('.gallery_title').css('background-color','#fff');
    $('.notice').hide();
    $('.notice_title').css('background-color','coral');
});
$('.notice_title').click(function(){
    $('.notice').show();
    $('.notice_title').css('background-color','#fff');
    $('.gallery').hide();
    $('.gallery_title').css('background-color','coral');
});

$('.popup_click').click(function(){
    $('.popup').show();
});
$('.popup_button').click(function(){
    $('.popup').hide();
});