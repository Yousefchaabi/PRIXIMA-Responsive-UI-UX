$(document).ready(function () {
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 7000,
    items: 1,
    smartSpeed: 1000,
    dots: false,
    responsive: {
      0: {},
      768: {},
    },
  });
  //Project Slider
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    margin: 18,
    responsive: {
      0: {
        items: 1,
      },
      768: {},
      1140: {
        items: 2,
        center: true,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
  });
});
