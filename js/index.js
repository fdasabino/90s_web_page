// mobile navigation toggler
const toggleMenu = () => {
  const menuToggle = document.querySelector(".toggle");
  menuToggle.classList.toggle("show");

  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("show");

  const bodyOverflow = document.body.style.overflow;
  document.body.style.overflow = bodyOverflow === "hidden" ? "scroll" : "hidden";
};
const closeMenuOnClick = () => {
  toggleMenu(false);
};

// active link
const linkContainer = document.querySelector(".navigation");
const links = linkContainer.getElementsByTagName("a");

for (const link of links) {
  link.addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
