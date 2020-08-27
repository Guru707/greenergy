
// $(".product-dtl-arrow a[href^='#']").click(function (e) {
//   e.preventDefault();
//   var position = $($(this).attr("href")).offset().top;

//   $("body, html").animate({
//     scrollTop: position
//   } /* speed */);
// });

$('.our-resolve .item a').on('click',function() {
    $("#fullpage").fullpage.moveTo($(this).index() + 3);
});

$('.down-icon a').click(function() {
    $.fn.fullpage.moveSectionDown();
});


  $(".icon-click").click(function(){
  $(".mypopup").fadeIn(1000);
  $(".mypopup .left-img-popup").addClass("img-animation");
  $(".mypopup .left-img-popup").removeClass("remove-img-animation");
  $(".right-popup-contnt").addClass("right-contnt-anmation");
  });

  $(".mypopup .close").click(function(){
    $(".mypopup").fadeOut(1500);
    $(".mypopup .left-img-popup").removeClass("img-animation");
    $(".mypopup .left-img-popup").addClass("remove-img-animation");
     $(".right-popup-contnt").removeClass("right-contnt-anmation");
  });

  

  $('#fullpage').fullpage({
          anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thpage', '8thpage', '9thpage'],
          sectionsColor: ['', '', '', '', '', '', '', '', ''],
          menu: '#menu',
          navigation: true,
          navigationPosition: 'right',
          responsiveWidth: 1100
        });




$('.owl-carousel1').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  },
});


// $('.owl-carousel2').owlCarousel({
//      center: true,
//     loop:true,
//     margin:0,
//     autoplayHoverPause: true,
//     nav:false,
//     autoplay:false,
// autoplayTimeout:6000,
// autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:3
//         }
//     },
// });




$('.owl-carousel2').owlCarousel({
  center: true,
  loop: true,
  smartSpeed:5000,
  margin: 0,
  autoplayHoverPause: true,
  nav: false,
  autoplay:false,
  autoplayTimeout:3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  },

  slideSpeed: 15000,
  paginationSpeed: 15000,
  mouseDrag: true,
  singleItem: true,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut'
});




// $(".Weuse-hydroponic-video .play-btn button").click(function () {
//   $(".play-btn h4").hide();
// });


var vid4 = document.getElementById("myVideo4"); 

function playVid4() { 
  vid4.play(); 
} 

function pauseVid4() { 
  vid4.pause(); 
} 

var vid5 = document.getElementById("myVideo5"); 

function playVid5() { 
  vid5.play(); 
} 

function pauseVid5() { 
  vid5.pause(); 
} 

function pauseVid6() { 
  vid5.pause(); 
} 




$("header .right-search ul li:first-child a img").click(function () {
  $(".search-container").fadeToggle();
});



$(".farm-prdct-menu li").click(function () {
  $('.farm-prdct-menu li > ul').not($(this).children("ul").fadeIn()).hide();

});


$('.farm-prdct-menu li').click(function () {
  $('.farm-prdct-menu li').removeClass('active');
  $(this).addClass('active').siblings('.farm-prdct-menu li');
  // myFunction();
});

var vid = document.getElementById("myVideo5");

function myFunction1() {
  isSupp = vid.canPlayType("video/mp4");
  if (isSupp == "") {
    vid.src = "images/mov_bbb.ogg";
  } else {
    vid.src = "images/mov_bbb.mp4";
  }
  vid.load();
}

function myFunction2() {
  isSupp = vid.canPlayType("video/mp4");
  if (isSupp == "") {
    vid.src = "images/mov_bbb1.ogg";
  } else {
    vid.src = "images/mov_bbb1.mp4";
    vid.pause();
  }
  vid.load();
} 





$(".tab-on-video .farm-prdct-menu ul li a").click(function () {
  $(".tab-on-video .btn-play1").hide();
    $(".btn-pause1").show();
});



$(".btn-play1").click(function () {
  $(this).hide();
  $(".btn-pause1").show();

});

$(".btn-pause1").click(function () {
  $(this).hide();
  $(".btn-play1").show();
});



$(".btn-play2").click(function () {
  $(this).hide();
  $(".btn-pause2").show();

});

$(".btn-pause2").click(function () {
  $(this).hide();
  $(".btn-play2").show();
});



$(".btn-play3").click(function () {
  $(this).hide();
  $(".btn-pause3").show();

});

$(".btn-pause3").click(function () {
  $(this).hide();
  $(".btn-play3").show();
});


$(".btn-pause6").click(function () {
  $(this).hide();
  $(".btn-play6").show();
});


var vid6 = document.getElementById("myVideo6"); 

function playVid6() { 
  vid6.play(); 
}






var vid2 = document.getElementById("myVideo2"); 

function playVid2() { 
  vid2.play(); 
} 

function pauseVid2() { 
  vid2.pause(); 
} 




// $(window).load(function() {
//     // start up after 2sec no matter what
//     window.setTimeout(function(){
//         $('body').removeClass("loading").addClass('loaded');
//     }, 2000);
// });


let btnAdd = document.querySelector(".counter-plus");
let btnSubtraction = document.querySelector(".counter-minus");
let input = document.querySelector(".handle-counter input");
let max = 10;
btnAdd.addEventListener("click", () => {
  let itemCount = parseInt(input.value);
  if (itemCount < max) {
    input.value = ++itemCount;
  }
});
btnSubtraction.addEventListener("click", () => {
  let itemCount = parseInt(input.value);
  if (itemCount > 0) {
    input.value = --itemCount;
  }
})
$(document).ready(function(){
  $(".cart_btn").click(function(){
    $(".sidebar-fixed").addClass("active");
  });
  $(".arrow-element").click(function(){
    $(".sidebar-fixed").removeClass("active");
  });

});

window.onscroll = function() {stickyFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}