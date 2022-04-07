/* #Header
  ======================================================= */
// Color Change
const header = document.querySelector('.header');

if (document.querySelector('.header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

if (document.querySelector('.header')) {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
}

/* #Gallery Slider
  ======================================================= */
if (document.querySelector('.gallery-slider .swiper')) {
  new Swiper(".gallery-slider .swiper", {
    centeredSlides: true,
    slidesPerView: 1.4,
    loop: true
  });
}

/* #Projects Slider
  ======================================================= */
if (document.querySelector('.projects-slider .swiper')) {
  new Swiper(".projects-slider .swiper", {
    pagination: {
      el: ".projects-slider .swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.13
      },
      1024: {
        slidesPerView: 3.33
      }
    }
  });
}