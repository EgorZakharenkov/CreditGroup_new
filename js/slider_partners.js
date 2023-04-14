$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 1920,
      settings: {
        slidesToShow: 4
      }
    },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
      {
      breakpoint: 700,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});