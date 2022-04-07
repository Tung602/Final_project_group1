// =============== Main ==================

// Slider
let heroBg = document.querySelector(".hero-bg");
let sliderBtnNext = document.querySelector(".hero-next");
let sliderBtnPrev = document.querySelector(".hero-prev");
let bgCount = 0;
let heroText = document.querySelectorAll(".hero-main");
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
    heroText[0].classList.remove("active");
    heroCaption[0].classList.remove("active");
    heroTitle[0].classList.remove("active");
    heroDesc[0].classList.remove("active");
    heroBtn[0].classList.remove("active");
    heroText[1].classList.add("active");
    heroCaption[1].classList.add("active");
    heroTitle[1].classList.add("active");
    heroDesc[1].classList.add("active");
    heroBtn[1].classList.add("active");
    heroBool = false;
  } else {
    heroText[1].classList.remove("active");
    heroCaption[1].classList.remove("active");
    heroTitle[1].classList.remove("active");
    heroDesc[1].classList.remove("active");
    heroBtn[1].classList.remove("active");
    heroText[0].classList.add("active");
    heroCaption[0].classList.add("active");
    heroTitle[0].classList.add("active");
    heroDesc[0].classList.add("active");
    heroBtn[0].classList.add("active");
    heroBool = true;
  }
};
setHeroBg(0);
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
  if (bgCount >= 0) {
    setHeroBg(bgCount);
  } else {
    bgCount = 1;
    setHeroBg(bgCount);
  }
};

window.onload = () => {
  heroText[0].classList.add("active");
  heroCaption[0].classList.add("active");
  heroTitle[0].classList.add("active");
  heroDesc[0].classList.add("active");
  heroBtn[0].classList.add("active");
};

