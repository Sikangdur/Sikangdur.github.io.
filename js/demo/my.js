jQuery(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {  
      '480': {
        slidesPerView: 4,
        spaceBetween: 40,},
      '@640': {
        slidesPerView: 5,
        spaceBetween: 50, },
    },
      // Optional parameters   
       freeMode: true,
      loop: false,
      scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,},
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', },
  
  })
  
  });