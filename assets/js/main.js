// ============ Header ================

// Menu aside
let navbarToggler = document.querySelector(".navbar-toggler");
let menuAside = document.querySelector(".menu-wrapper");
let modal = document.querySelector(".modal");
navbarToggler.onclick = () => {
  menuAside.classList.add("show-menu-aside");
  modal.classList.add("show-modal");
};
modal.onclick = () => {
  menuAside.classList.remove("show-menu-aside");
  modal.classList.remove("show-modal");
};

// =============== Main ==================

let collections = [
  {
    caption: "Summer Collection",
    title: "Fall - Winter Collections 2030",
    desc: "A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.",
  },
  {
    caption: "Autumn Collection",
    title: "Fall - Winter Collections 2030",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex laborum nostrum perspiciatis autem est ut.",
  },
];
// Slider
let heroBg = document.querySelector(".hero-bg");
let sliderBtnNext = document.querySelector(".hero-next");
let sliderBtnPrev = document.querySelector(".hero-prev");
let bgCount = 0;
let heroCaption = document.querySelectorAll(".hero-caption");
let heroTitle = document.querySelectorAll(".hero-title");
let heroDesc = document.querySelectorAll(".hero-desc");
let heroBtn = document.querySelectorAll(".hero-btn");
let heroBool = true;
let setHeroBg = (value) => {
  heroBg.style.backgroundImage = `url(./assets/img/hero/hero-${value + 1}.jpg)`;
};
let activeHero = () => {
  if (heroBool) {
    heroCaption[0].classList.remove("active");
    heroTitle[0].classList.remove("active");
    heroDesc[0].classList.remove("active");
    heroBtn[0].classList.remove("active");
    heroCaption[1].classList.add("active");
    heroTitle[1].classList.add("active");
    heroDesc[1].classList.add("active");
    heroBtn[1].classList.add("active");
    heroBool = false;
  } else {
    heroCaption[1].classList.remove("active");
    heroTitle[1].classList.remove("active");
    heroDesc[1].classList.remove("active");
    heroBtn[1].classList.remove("active");
    heroCaption[0].classList.add("active");
    heroTitle[0].classList.add("active");
    heroDesc[0].classList.add("active");
    heroBtn[0].classList.add("active");
    heroBool = true;
  }
};
setHeroBg(1);
sliderBtnNext.onclick = () => {
  activeHero();
  bgCount++;
  if (bgCount < 2) {
    setHeroBg(bgCount);
  } else {
    bgCount = 0;
    setHeroBg(bgCount);
  }
};
sliderBtnPrev.onclick = () => {
  activeHero();
  bgCount--;
  if (bgCount > 0) {
    setHeroBg(bgCount);
  } else {
    bgCount = 1;
  }
};

window.onload = () => {
  heroCaption[0].classList.add("active");
  heroTitle[0].classList.add("active");
  heroDesc[0].classList.add("active");
  heroBtn[0].classList.add("active");
};
