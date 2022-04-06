// ============ Header ================

// Menu aside
let navbarToggler = document.querySelector(".main-navbar-toggler");
let menuAside = document.querySelector(".menu-wrapper");
let modal = document.querySelector(".main-modal");
navbarToggler.onclick = () => {
  menuAside.classList.add("show-menu-aside");
  modal.classList.add("show-modal");
};
modal.onclick = () => {
  menuAside.classList.remove("show-menu-aside");
  modal.classList.remove("show-modal");
};

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

// =============== Product color select ================

let colorPicker = document.querySelectorAll(".color-picker");
let productImg = document.querySelector(".product-item-img");
let colorLabel = document.querySelectorAll(".color-picker-label");
console.log(colorPicker);
colorPicker.forEach((e, index) => {
  colorPicker[index].addEventListener("change", () => {
    colorLabel[index].classList.add("active");
    productImg.src = `./assets/img/product/product-${index + 1}.jpg`;
    [...colorLabel]
      .filter((e, i) => i != index)
      .forEach((e) => {
        e.classList.remove("active");
      });
  });
});

// =============== choose picture(shop-detail) ================
function changeImage(a) {
  document.getElementById('img').src = a;
}

// =============== choose content(shop-detail) ================
function openParagraph(evt, p){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('shop-detail-content-paragraph-tabcontent')
  for(i=0; i<tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName('shop-detail-content-paragraph-tablinks');

  for(i=0; i<tablinks.length; i++){

    tablinks[i].className = tablinks[i].className.replace(" lineRed", "");
    console.log(tablinks[i].className)
  }
  document.getElementById(p).style.display = "block";
  evt.currentTarget.className += " lineRed";
}