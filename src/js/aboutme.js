import Swiper from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", function () {
  const skillsSlider = new Swiper(".swiper", {
    slidesPerView: "auto",
    loop: true,
    freeMode: {
      enabled: true,
      minimumVelocity: 0.02,
      momentum: true,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
    },
  });

  // Кнопка для гортання на 1 слайд вперед
  document
    .querySelector(".swiper-button-next-custom")
    .addEventListener("click", function () {
      skillsSlider.slideNext();
    });
});
