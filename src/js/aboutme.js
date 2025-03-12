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
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  const nextButton = document.querySelector(".swiper-skills-next");

  const mediaQuery = window.matchMedia("(min-width: 1440px)");

  const handleNextClick = () => {
    if (mediaQuery.matches) {
      const activeSlide = document.querySelector(".swiper-slide-active");
      const nextSlide = activeSlide.nextElementSibling || document.querySelector(".swiper-slide");

      if (activeSlide && nextSlide) {
        activeSlide.classList.remove("swiper-slide-active", "swiper-slide-prev", "swiper-slide-next");

        nextSlide.classList.add("swiper-slide-active");

        const prevSlide = nextSlide.previousElementSibling || document.querySelector(".swiper-slide:last-child");
        const nextNextSlide = nextSlide.nextElementSibling || document.querySelector(".swiper-slide:first-child");

        if (prevSlide) {
          prevSlide.classList.add("swiper-slide-prev");
        }
        if (nextNextSlide) {
          nextNextSlide.classList.add("swiper-slide-next");
        }
      }
    } else {
      skillsSlider.slideNext();
    }
  };

  nextButton.addEventListener("click", handleNextClick);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab" || event.key === "ArrowRight") {
      if (document.activeElement === nextButton) {
        event.preventDefault();
        handleNextClick();
      }
    }
  });
});