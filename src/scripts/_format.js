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
    '(max-width: 650px)',
    '.format__inner',
    {
      spaceBetween: 10,
      slidesPerView: 'auto',
      // centeredSlides:true,
      speed:500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
     someFunc
  );

});


