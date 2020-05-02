$(document).ready(function () {
  $('.main-slider__body').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: false,
    // slide: '.my_slider__block',
    // adaptiveHeight: true,
    // infinite: false,
    dots: true,
    appendDots: $('.main-slider__nav'),
    dotsClass: 'main-slider__dots',
    // respondTo: 'min',
    speed: 1000,
    //  fade: true,
    cssEase: 'cubic-bezier(.31,.16,.21,1.04)',
    // responsive: [
    //    {
    //       breakpoint: 1024
    //    },
    //    {
    //    breakpoint: 600
    //    },
    //    {
    //    breakpoint: 480
    //    }
    // ]
  });
});