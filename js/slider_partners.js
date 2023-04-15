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
      breakpoint: 2000,
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
      breakpoint: 850,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});