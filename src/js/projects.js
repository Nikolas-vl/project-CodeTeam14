import Swiper from 'swiper/bundle';

// Initialize Swiper
const swiperProjects = new Swiper('.projects-swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  autoHeight: true,
  speed: 1000,
  spaceBetween: 48,
  keyboard: { enabled: true, onlyInViewport: false },
  mousewheel: false,
  allowTouchMove: true,
  simulateTouch: true,
  navigation: {
    nextEl: '.custom-projects-next',
    prevEl: '.custom-projects-prev',
    disabledClass: 'swiper-button-disabled',
  },
  grabCursor: true,
});
