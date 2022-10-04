const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
selectedImage = document.getElementById("selectedImage");

const imageDescription = [
  "Senna in the curves with his maclaren f1 silverstone 2",
  "Senna holding his helmet",
  "Senna waves to the fans",
  "Close up of sennas maclaren f1",
  "Frontal shot of sennas toleman",
  "Upper shot of sennas lotus f1",
  "Senna waves the brazilian flag after winning in canada",
  "Diagonal shot of sennas toleman",
  "Senna in the curves with his maclaren f1 silverstone",
  "Frontal shot of senna's lotus",
];

imageDescription.forEach((description, index) => {
  const image = document.createElement("img");
  image.src = `../assets/gallery/ayrton-senna${index}.jpg`;
  image.alt = description;
  image.classList.add("galleryImg");
  image.addEventListener("click", () => {
    //popup
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `../assets/gallery/ayrton-senna${index}.jpg`;
    selectedImage.alt = description;
  });
  gallery.appendChild(image);
});

popup.addEventListener("click", () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = "";
  popup.alt = "";
});
