$(document).ready(function () {

  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100) {
        $("header").addClass("Aactivet");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("header").removeClass("Aactivet");
      }
    });
  });


  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 10000
  });


  var owl = $('.testimonial .testi');
  owl.owlCarousel({
      items:3,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
  });

var owl = $('.sponser .caro');
  owl.owlCarousel({
      items:3,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1500,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:3,
            nav:false
        },
        600:{
            items:5,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
  });




});