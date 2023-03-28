$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  items: 2,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      loop: true,
    },
    375: {
      items: 2,
      nav: false,
      loop: true,
    },
    768: {
      items: 3,
      nav: false,
      loop: true,
    },
    1000: {
      items: 5,
      nav: false,
      loop: true,
    },
  },
});
