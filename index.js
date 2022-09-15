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

// mobile navigation toggler
const toggleMenu = () => {
  const menuToggle = document.querySelector(".toggle");
  menuToggle.classList.toggle("show");

  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("show");
};

const closeMenuOnClick = () => {
  toggleMenu(false);
};

// active link
const linkContainer = document.querySelector(".navigation");
const links = linkContainer.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}
