 $(function() {
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 650) {
      $(".header-container").addClass("default")
    }
    else  {
      $(".header-container").removeClass("default")
    } 
  });
/* $(window).resize(function () {
    if($(window).width() <= 479){
        $('.header-container').removeClass('default');
    };
  });*/
  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 650) {
      $("#nav-icon2, .responsive_menu").addClass('respons-button');
    }
    else  {
      $("#nav-icon2, .responsive_menu").removeClass('respons-button');
    } 
  });
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 650) {
      $(".logo").addClass("show")
    }
    else {
      $(".logo").removeClass("show")
    }
  });
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 650) {
      $(".nav-top").addClass("show-top")
    }
    else {
      $(".nav-top").removeClass("show-top")
    }
  });


$(".top-button .scroll").click(function() {
   $('#content').addClass('active');
  });
$("#content .close").click(function() {
   $('#content').removeClass('active');
  });



$('.top-button .scroll').click(function () {
  $('html, body').animate({
    scrollTop: $(".link").offset().top
  }, 2000);
});

$('.brand-list').slick({
  dots:true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows:false,
  autoplay:true,
  autoplaySpeed:1500,
   responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 895,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        dots:false,
        infinite: true,
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
      }
    },
    ]
});
$('.slider_third').slick({
  dots:true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
  autoplaySpeed:1500,
});
});
$(document).ready( function(){
$('#slider1').slick({
  dots:true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows:false,
  autoplay:true,
  autoplaySpeed:3000,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:false,
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    ]
});

$(document).ready(function(){
  $('#nav-icon1, #nav-icon2').click(function(){
    $(this).toggleClass('open');
  });
});

 $(document).ready(function() {

  var $navIcon = $('#nav-icon1'),
      $menuWrap = $('.nav-top');
     
  $navIcon.on('click', function() {
    $(this).toggleClass('button-open');
    $menuWrap.toggleClass('menu-show');
  });
});
 $(document).ready(function() {

  var $navIcon2 = $('#nav-icon2'),
      $menuWrap2 = $('.responsive_menu');
     
  $navIcon2.on('click', function() {
    $(this).toggleClass('button-on');
    $menuWrap2.toggleClass('menu-on');
  });
});
//  $(document).ready(function(){
//     $("#menu").on("click","a", function () {
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });
});



