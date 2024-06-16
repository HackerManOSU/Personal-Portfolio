$(document).ready(function(){
    $('.carousel').slick({
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,

      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
   

    });
  });
  
  // Slick version 1.5.8