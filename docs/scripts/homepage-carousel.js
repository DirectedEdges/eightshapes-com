const carouselButtons = document.querySelectorAll("[data-slide-id]");
const carouselSlides = document.querySelectorAll(".home-hero-slide");
const slideIds = Array.from(carouselSlides).map((s) => s.id);
const slidePauseDuration = 5000; // How long the auto-rotate should stay on a single slide, in milliseconds
let slideIndex = 0;
let autoRotateInterval;

const showNextSlide = () => {
  let nextSlideIndex = slideIndex + 1;
  if (nextSlideIndex > slideIds.length - 1) {
    nextSlideIndex = 0;
  }
  slideIndex = nextSlideIndex;
  const nextSlideId = slideIds[slideIndex];
  console.log(nextSlideId);
  showSlide(nextSlideId);
};

const showSlide = (slideId) => {
  const selectedSlide = document.getElementById(slideId);
  const selectedButton = document.querySelector(`[data-slide-id='${slideId}']`);
  carouselButtons.forEach((button) => button.classList.remove("selected"));
  carouselSlides.forEach((slide) => slide.classList.remove("selected"));
  selectedSlide.classList.add("selected");
  selectedButton.classList.add("selected");
};

const handleCarouselButtonClick = (e) => {
  const slideId = e.target.dataset.slideId;
  clearInterval(autoRotateInterval);
  showSlide(slideId);
};

carouselButtons.forEach((b) => {
  b.addEventListener("click", handleCarouselButtonClick);
});

autoRotateInterval = setInterval(showNextSlide, slidePauseDuration);
