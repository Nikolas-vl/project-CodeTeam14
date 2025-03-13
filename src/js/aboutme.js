import Swiper from "swiper";
import "swiper/css";
import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container-aboutme', {
    showMultiple: true,
    openOnInit: [],
  });
});

document.addEventListener("DOMContentLoaded", function () {
 const skillsSlider = new Swiper(".swiper-skills", {
  slidesPerView: "auto",
  loop: true,
  speed: 800,
  freeMode: {
    enabled: true,
    minimumVelocity: 0.02,
    momentum: true,
    momentumBounce: true,
    momentumBounceRatio: 0.6,
    momentumRatio: 0.7,
    momentumVelocityRatio: 0.7, 
    sticky: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
   },
  navigation: {
    nextEl: '.swiper-skills-next',
  },
  effect: "slide",
  easing: 'ease-in-out',
});
});