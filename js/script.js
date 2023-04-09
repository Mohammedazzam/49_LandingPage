const linkDrop = document.getElementById("link-lang");

linkDrop.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".sub-menu").classList.toggle("show");
});

// Swiper
const Section02swiper = new Swiper(".section-02 .swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: "section-02 .button-next",
    prevEl: "section-02 .button-prev",
  },
});


// Swiper
const Section03swiper = new Swiper(".section-03 .swiper", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: "section-03 .button-next",
      prevEl: "section-03 .button-prev",
    },
  });
