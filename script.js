// button script js

$('.btn').on('mouseenter', function(e){
    let parentOffset = $(this).offset(),
    posX = e.pageX - parentOffset.left,
    posY = e.pageY - parentOffset.top;
    $(this).find('span').css({top: posY, left: posX});
});

// preloader script


// open mobile meni script

let openMenu = $('#open-menu');
let closeMenu = $('#close-menu');
let nav = $('#nav');

openMenu.click(function(){
    event.preventDefault();
    nav.animate({
        "left": "0rem"
    }, 500)
});

closeMenu.click(function(){
    event.preventDefault();
    nav.animate({
        "left": "-30rem"
    }, 500)
});

// close menu on click link
$('.menu li a').on('click', function(){
    nav.animate({
        'left': '-30rem'
    }, 500)
});

// fixed menu on scroll
$(window).on('scroll', function(){
   let headerTop = $('.top-header').height();
   if ($(this).scrollTop() >= headerTop){
    $('.header').addClass('fixed-menu');
   } else {
    $('.header').removeClass('fixed-menu')
   }
});

//magnific popup script

$('.popup-youtube').magnificPopup({
    type: 'iframe',
})
