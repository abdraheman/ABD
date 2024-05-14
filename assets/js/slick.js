$('.each-work').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    // autoSlidesToShow: true,
    arrows:false,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },

        {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },
      ]
});