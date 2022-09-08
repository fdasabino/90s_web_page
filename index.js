// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
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
