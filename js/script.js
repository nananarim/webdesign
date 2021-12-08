$(function(){
    $('.nav').mouseover(function(){
        $('.sub').stop().slideDown();
        $('.bg').stop().slideDown();
    });
    $('.nav').mouseout(function(){
        $('.sub').stop().slideUp();
        $('.bg').stop().slideUp();
    });
});

setInterval(function(){
    $('.banner').delay(2500);
    $('.banner').animate({marginTop:"-300px"},500);
    $('.banner').delay(2500);
    $('.banner').animate({marginTop:"-600px"},500);
    $('.banner').delay(2500);
    $('.banner').animate({marginTop:"0"},200);
});


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
$('.popup_button > input').click(function(){
    $('.popup').hide();
});

$('.family_menu').mouseenter(function(){
    $('.family_menu ul').stop().slideDown();
});
$('.family_menu').mouseleave(function(){
    $('.family_menu ul').stop().slideUp();
});
