const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
selectedImage = document.getElementById("selectedImage");

const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement("img");
  image.src = `../assets/gallery/ayrton-senna${i}.jpg`;
  image.alt = `Senna in action in his car around the track${i}`;
  image.classList.add("galleryImg");
  image.addEventListener("click", () => {
    //popup
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `../assets/gallery/ayrton-senna${i}.jpg`;
    selectedImage.alt = `Senna in action in his car around the track${i}`;
  });
  gallery.appendChild(image);
});

popup.addEventListener("click", () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = "";
  popup.alt = "";
});
