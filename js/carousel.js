const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const carousel = document.querySelector(".carousel");

prevButton.addEventListener("click", () => {
  carousel.appendChild(carousel.firstElementChild);
});

nextButton.addEventListener("click", () => {
  carousel.prepend(carousel.lastElementChild);
});