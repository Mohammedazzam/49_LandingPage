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


  const Section04swiper = new Swiper(".section-04 .swiper", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: "section-04 .button-next",
      prevEl: "section-04 .button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });
