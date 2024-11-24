const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".nextArrowBtn",
    prevEl: ".prevArrowBtn",
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
