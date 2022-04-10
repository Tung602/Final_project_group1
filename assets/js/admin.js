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
    previewContainerAddProduct.innerHTML =
      '<span class="product-preview__default-text">Preview Image</span>';
  }
});

// add color in add product

const addColorContainer = document.querySelector(".add-product__color-variant");
const addColorBtn = document.querySelector(".add-color-btn");
const addColorElement = document.createElement("div");
const addColorHTML = `<div class="m-4 row d-flex add-product__color-item">
<div class="input-group">
  <input
    type="text"
    class="form-control fs-3"
    id="inputColorName"
    placeholder="Color name"
  />
  <input
    type="color"
    class="form-control form-control-color fs-3"
    id="exampleColorInput"
    value="#563d7c"
    title="Choose your color"
  />
</div>
<div class="col-12 mt-4">
  <input
    class="form-control add-product__input-file fs-4"
    type="file"
    id="formFileMultiple"
    multiple
  />
  <div class="product-preview">
    <span class="product-preview__default-text"
      >Preview Variant</span
    >
  </div>
</div>
</div>`;
addColorBtn.onclick = () => {
  addColorContainer.appendChild(addColorElement);
  addColorElement.outerHTML = addColorHTML;
  console.log(`a`);
}

