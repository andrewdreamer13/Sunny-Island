// script for turning on swiper slider at pointed window width

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
     let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
       swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  // callback function to do something when slider is working
  const someFunc = (instance) => {
    if (instance) {
      // console.log(instance)
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  // Swiper initialization

  resizableSwiper(
    '(max-width: 1250px)',
    '.format__inner',
    {
      loop:true,
      spaceBetween: 10,
      slidesPerView: 'auto',
      centeredSlides:true,
      speed:500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
     someFunc
  );

  resizableSwiper(
    '(max-width: 1100px)',
    '.programs__inner',
    {
      loop:true,
      spaceBetween: 10,
      slidesPerView: 'auto',
      centeredSlides:true,
      speed:500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
     someFunc
  );

  resizableSwiper(
    '(max-width: 850px)',
    '.catalog__inner',
    {
      //  loop:true,
      // parallax:true,
      spaceBetween: 10,
      // slidesPerGroup:'auto',
      slidesPerView: 'auto',
      // initialSlide: 2,
      // grid: {
      //   rows:1,
      //    fill:'row'
      // },
      //  centeredSlides:true,
      speed:500,
      pagination: {
        el: '.swiper-pagination',
        // clickable: true,
         dynamicBullets: true,
      },
    },
     someFunc
  );
  

});


