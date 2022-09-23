const createCarousel = (config) => {
  const { selector, images } = config;

  const even = images.length % 2 === 0;
  const activeImageIndex = Math.floor(images.length / 2);
  const container = document.querySelector(selector);
  const html = `
        <ul${even ? ' class="even"' : ""}>
            ${images
              .map(
                (image, index) => `
                <li${index === activeImageIndex ? ' class="active img-fluid"' : ""}>
                    <img
                        data-target="img"
                        src="${image.src}"
                        alt="${image.alt}"
                    />
                </li$>
            `
              )
              .join("")}
        </ul>
        <div class="arrows">
           <span><button class="left" data-target="left"><</button></span>
           <span><button class="right" data-target="right">></button></span>
        </div>
    `;

  let transform = even ? -250 : 0;
  let index = activeImageIndex;

  container.innerHTML = html;

  container.addEventListener("click", (event) => {
    const target = event.target;
    const carousel = container.querySelector("ul");
    const activeElement = container.querySelector(".active");

    switch (target.dataset.target) {
      case "left":
        if (index !== 0) {
          index--;
          transform += 500;
          carousel.style.transform = `translateX(${transform}px)`;

          activeElement.classList.remove("active");
          activeElement.previousElementSibling.classList.add("active");
        }
        break;
      case "right":
        if (index !== images.length - 1) {
          index++;
          transform -= 500;
          carousel.style.transform = `translateX(${transform}px)`;

          activeElement.classList.remove("active");
          activeElement.nextElementSibling.classList.add("active");
        }
        break;
    }
  });
};

const images = [
  {
    src: "../assets/gallery/ayrton-senna.jpg",
    alt: "formula 1 car",
    name: "ayrton-senna",
  },
  {
    src: "../assets/gallery/ayrton-senna1.jpg",
    alt: "senna holding his helmet",
  },
  {
    src: "../assets/gallery/ayrton-senna2.jpg",
    alt: "f1 car in the rain",
  },
  {
    src: "../assets/gallery/ayrton-senna3.jpg",
    alt: "senna's car, head shot",
  },
  {
    src: "../assets/gallery/ayrton-senna4.jpg",
    alt: "senna's car frontal shot",
  },
  {
    src: "../assets/gallery/ayrton-senna5.jpg",
    alt: "senna's car frontal shot",
  },
  {
    src: "../assets/gallery/ayrton-senna6.jpg",
    alt: "senna's car side shot",
  },
  {
    src: "../assets/gallery/ayrton-senna7.jpg",
    alt: "senna's car frontal shot",
  },
  {
    src: "../assets/gallery/ayrton-senna8.jpg",
    alt: "senna's car frontal shot",
  },
  {
    src: "../assets/gallery/ayrton-senna9.jpg",
    alt: "senna's car frontal shot",
  },
  {
    src: "../assets/gallery/ayrton-senna10.png",
    alt: "senna's car frontal shot",
  },
];

createCarousel({
  selector: ".carousel",
  images,
});
