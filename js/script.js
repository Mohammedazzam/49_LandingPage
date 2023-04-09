const linkDrop = document.getElementById("link-lang");

linkDrop.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".sub-menu").classList.toggle("show");
});

// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
