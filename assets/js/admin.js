// =============== Admin ===============

let tabLinks = document.getElementsByClassName("admin-nav-btn");
let tabContent = document.getElementsByClassName("main-content");
for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].onclick = () => {
    for (let j = 0; j < tabContent.length; j++) {
      tabContent[j].style.display = "none";
    }
    for (let j = 0; j < tabLinks.length; j++) {
      tabLinks[j].classList.remove("active");
    }
    tabLinks[i].classList.add("active");
    tabContent[i].style.display = "block";
  };
}
tabLinks[0].click();

// ============= add product =============

let addProductBtn = document.querySelector(".products-add-btn");
let modal = document.querySelector(".main-modal");
let addProductContainer = document.querySelector(".add-product-container");
addProductBtn.onclick = () => {
  modal.classList.add("show-fluid-modal");
  addProductContainer.classList.add("show-add-product");
};

// Preview Image

const inputFileAddProduct = document.querySelector(".add-product__input-file");
const previewContainerAddProduct = document.querySelector(".product-preview");
const previewImageAddProduct = document.querySelector(
  ".product-preview__image"
);
const previewDefaultTextAddProduct = document.querySelector(
  ".product-preview__default-text"
);
inputFileAddProduct.addEventListener("change", function () {
  // const addProductFile = this.files[0];
  // console.log(this.files.length);
  // if (addProductFile) {
  //   const reader = new FileReader();
  //   previewDefaultTextAddProduct.style.display = "none";
  //   previewImageAddProduct.style.display = "inline-block";
  //   reader.addEventListener("load", function () {
  //     previewImageAddProduct.setAttribute("src", this.result);
  //   });
  //   reader.readAsDataURL(addProductFile);
  // }
  if (this.files.length > 0) {
    previewContainerAddProduct.innerHTML = "";
    for (let data of this.files) {
      const previewImage = document.createElement("img");
      const reader = new FileReader();
      reader.addEventListener("load", function () {
        previewImage.setAttribute("src", this.result);
        previewContainerAddProduct.appendChild(previewImage);
      });
      reader.readAsDataURL(data);
    }
  } else {
    previewDefaultTextAddProduct.style.display = "block";
    previewContainerAddProduct.innerHTML = '<span class="product-preview__default-text">Preview Image</span>';
  }
});
