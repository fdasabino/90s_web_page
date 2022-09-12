// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 2,
    stretch: 0,
    depth: 100,
    modifier: 10,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

const toggleMenu = () => {
  const menuToggle = document.querySelector(".toggle");
  menuToggle.classList.toggle("active");

  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("active");
};
