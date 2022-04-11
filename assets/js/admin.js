// =============== Admin ===============
let data = JSON.parse(window.localStorage.getItem("data"));
let tabLinks = document.getElementsByClassName("admin-nav-btn");
let tabContent = document.getElementsByClassName("main-content");
let colorVariantLength = 0;
let colorAddingMedia = [];
let addProductMedia = [];
let editColorVariantLength = 0;
let colorAddingEditMedia = [];
let editProductMedia = [];
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
let addProductButton = document.querySelector("#addProductButton");
addProductButton.addEventListener("click", (event) => {
  let colors = [];
  let addProductTitleInput = document.querySelector("#addProductTitleInput");
  let addProductDescriptionInput = document.querySelector(
    "#addProductDescriptionInput"
  );
  let addProductPriceInput = document.querySelector("#addProductPriceInput");
  let addProductPriceCompareInput = document.querySelector(
    "#addProductPriceCompareInput"
  );
  let addProductSizeInput = document.getElementsByName("addProductSizeInput");
  let addProductBrandInput = document.querySelector("#addProductBrandInput");
  let addProductCategoriesInput = document.querySelector(
    "#addProductCategoriesInput"
  );
  let addProductTagsInput = document.querySelector("#addProductTagsInput");
  let addColorContainer = document.querySelector(".add-product__color-variant");
  if (addColorContainer.children.length > 0) {
    for (let i = 0, length = colorVariantLength; i < length; i++) {
      let inputColorName = document.querySelector(`#inputColorName${i}`);
      let inputColorRgb = document.querySelector(`#inputColorRgb${i}`);
      colors.push({
        name: inputColorName.value,
        rgb: inputColorRgb.value,
        colorMedia: colorAddingMedia[i],
      });
    }
  }
  // Lọc Size
  let sizes = [];
  for (let size of addProductSizeInput) {
    if (size.checked === true) {
      sizes.push(size.value);
    }
  }
  // Thêm sản phẩm vào localStorage
  data.initProducts.push({
    id: data.initProducts.length + 1,
    name: addProductTitleInput.value,
    description: addProductDescriptionInput.value,
    price: addProductPriceInput.value,
    comparePrice: addProductPriceCompareInput.value,
    media: [...addProductMedia],
    sizing: [...sizes],
    colors: [...colors],
    active: true,
    branding: addProductBrandInput.value.split(", "),
    categories: addProductCategoriesInput.value.split(", "),
    tags: addProductTagsInput.value.split(", "),
  });
  colorVariantLength = 0;
  colorAddingMedia = [];
  addProductMedia = [];
  window.localStorage.setItem("data", JSON.stringify(data));
});

// ================== Preview Image Add Product ====================

const inputFileAddProduct = document.querySelector(".add-product__input-file");
const previewContainerAddProduct = document.querySelector(".product-preview");
const previewDefaultTextAddProduct = document.querySelector(
  ".product-preview__default-text"
);
inputFileAddProduct.addEventListener("change", function () {
  if (this.files.length > 0) {
    previewContainerAddProduct.innerHTML = "";
    for (let data of this.files) {
      const previewImage = document.createElement("img");
      const reader = new FileReader();
      reader.addEventListener("load", function () {
        previewImage.setAttribute("src", this.result);
        addProductMedia.push(this.result);
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

// ================ Preview Image Edit Product ===============
const inputFileEditProduct = document.querySelector(
  ".edit-product__input-file"
);
const previewContainerEditProduct = document.querySelector(
  ".edit-product-preview"
);
const previewDefaultTextEditProduct = document.querySelector(
  ".product-preview__default-text"
);
inputFileEditProduct.addEventListener("change", function () {
  if (this.files.length > 0) {
    previewContainerEditProduct.innerHTML = "";
    for (let data of this.files) {
      const previewImage = document.createElement("img");
      const reader = new FileReader();
      reader.addEventListener("load", function () {
        previewImage.setAttribute("src", this.result);
        editProductMedia.push(this.result);
        previewContainerEditProduct.appendChild(previewImage);
      });
      reader.readAsDataURL(data);
    }
  } else {
    previewDefaultTextEditProduct.style.display = "block";
    previewContainerEditProduct.innerHTML =
      '<span class="product-preview__default-text">Preview Image</span>';
  }
});

// =========== Add color in add product ==============

const addColorContainer = document.querySelector(".add-product__color-variant");
const addColorBtn = document.querySelector(".add-color-btn");
addColorBtn.onclick = () => {
  const addColorElement = document.createElement("div");
  addColorContainer.appendChild(addColorElement);
  addColorElement.outerHTML = `<div class="m-4 row d-flex add-product__color-item">
                                <div class="input-group">
                                  <input
                                    type="text"
                                    class="form-control input-color-name fs-3"
                                    id="inputColorName${colorVariantLength}"
                                    placeholder="Color name"
                                  />
                                  <input
                                    type="color"
                                    class="form-control form-control-color fs-3"
                                    id="inputColorRgb${colorVariantLength}"
                                    value="#563d7c"
                                    title="Choose your color"
                                  />
                                </div>
                                <div class="col-12 mt-4">
                                  <input
                                    class="form-control add-product__input-file fs-4"
                                    type="file"
                                    id="inputColorMedia${colorVariantLength}"
                                    multiple
                                  />
                                  <div class="product-preview" id="productPreview${colorVariantLength}">
                                    <span class="product-preview__default-text" id="productPreviewDefaultText${colorVariantLength}"
                                      >Preview Variant</span
                                    >
                                  </div>
                                </div>
                              </div>`;
  const inputFileAddProduct = document.querySelector(
    `#inputColorMedia${colorVariantLength}`
  );
  const previewContainerAddProduct = document.querySelector(
    `#productPreview${colorVariantLength}`
  );
  const previewDefaultTextAddProduct = document.querySelector(
    `#productPreviewDefaultText${colorVariantLength}`
  );
  inputFileAddProduct.addEventListener("change", function () {
    if (this.files.length > 0) {
      let colors = [];
      previewContainerAddProduct.innerHTML = "";
      for (let data of this.files) {
        const previewImage = document.createElement("img");
        const reader = new FileReader();
        reader.addEventListener("load", function () {
          previewImage.setAttribute("src", this.result);
          colors.push(this.result);
          previewContainerAddProduct.appendChild(previewImage);
        });
        reader.readAsDataURL(data);
      }
      colorAddingMedia.push(colors);
    } else {
      previewDefaultTextAddProduct.style.display = "block";
      previewContainerAddProduct.innerHTML =
        '<span class="product-preview__default-text">Preview Image</span>';
    }
  });
  colorVariantLength++;
};

// =============== Edit Product ================
let renderEditProductAdmin = function (product) {
  let editProductTitleInput = document.querySelector("#editProductTitleInput");
  editProductTitleInput.setAttribute("data-bs", product.id);
  let editProductDescriptionInput = document.querySelector(
    "#editProductDescriptionInput"
  );
  let editProductMediaInput = document.querySelector("#editProductMediaInput");
  let editProductPriceInput = document.querySelector("#editProductPriceInput");
  let editProductPriceCompareInput = document.querySelector(
    "#editProductPriceCompareInput"
  );
  let editProductSizeInput = document.getElementsByName("editProductSizeInput");
  let editProductBrandInput = document.querySelector("#editProductBrandInput");
  let editProductCategoriesInput = document.querySelector(
    "#editProductCategoriesInput"
  );
  let editProductTagsInput = document.querySelector("#editProductTagsInput");
  let editColorContainer = document.querySelector(
    ".edit-product__color-variant"
  );
  let editProductCurrentMedia = document.querySelector(
    ".product-current-media"
  );
  let editProductCurrentColor = document.querySelector(
    ".edit-product-current-color"
  );
  editProductBrandInput.value = product.branding;
  editProductCategoriesInput.value = product.categories.join(", ");
  editProductTagsInput.value = product.tags.join(", ");
  editProductTitleInput.value = product.name;
  editProductDescriptionInput.value = product.description;
  editProductPriceInput.value = product.price;
  editProductPriceCompareInput.value = product.comparePrice;
  editProductCurrentMedia.innerHTML = "";
  editProductSizeInput.forEach((e) => {
    if (product.sizing.includes(e.value)) {
      e.checked = true;
    }
  });

  product.media.forEach((e, index) => {
    let productCurrentMediaItem = document.createElement("div");
    editProductCurrentMedia.appendChild(productCurrentMediaItem);
    productCurrentMediaItem.outerHTML = `<div class="product-current-media-item" id="product-current-media-id-${index}" data-bs="${index}">
                                          <button id="product-current-media-btn-id-${index}"><i class="fa-solid fa-xmark"></i></button>
                                          <img src="${e}" alt="">
                                        </div>`;
  });
  product.media.forEach((e, index) => {
    let editProductCurrentItem = document.querySelector(
      `#product-current-media-id-${index}`
    );
    let editProductCurrentItemBtn = document.querySelector(
      `#product-current-media-btn-id-${index}`
    );
    editProductCurrentItemBtn.addEventListener("click", (event) => {
      editProductCurrentMedia.removeChild(editProductCurrentItem);
    });
  });
  editProductCurrentColor.innerHTML = "";
  product.colors.forEach((color, index) => {
    let editProductCurrentColorItem = document.createElement("div");
    editProductCurrentColor.appendChild(editProductCurrentColorItem);
    editProductCurrentColorItem.outerHTML = `<div class="input-group mb-3 edit-current-color-item" id="edit-current-color-item-id${color.rgb}" data-bs="${color.rgb}">
                                              <span
                                                class="input-group-text fs-3"
                                                id="edit-current-color-name-id${color.rgb}"
                                                >${color.name}</span
                                              >
                                              <input
                                                type="color"
                                                class="form-control form-control-color fs-3 edit-current-color-input"
                                                id="edit-current-color-rgb-id${color.rgb}"
                                                value="${color.rgb}"
                                              />
                                              <button id="edit-color-current-btn-id${color.rgb}">
                                                <i class="fa-solid fa-xmark"></i>
                                              </button>
                                            </div>`;
  });
  product.colors.forEach((color) => {
    let editProductCurrentColorItem = document.getElementById(
      `edit-current-color-item-id${color.rgb}`
    );
    let editProductCurrentColorCloseBtn = document.getElementById(
      `edit-color-current-btn-id${color.rgb}`
    );
    editProductCurrentColorCloseBtn.addEventListener("click", (event) => {
      editProductCurrentColor.removeChild(editProductCurrentColorItem);
    });
  });
  // =============== Render add color in edit product ====================
  const editColorBtn = document.querySelector(".edit-color-btn");
  editColorBtn.onclick = () => {
    const editColorElement = document.createElement("div");
    editColorContainer.appendChild(editColorElement);
    editColorElement.outerHTML = `<div class="m-4 row d-flex add-product__color-item">
                                <div class="input-group">
                                  <input
                                    type="text"
                                    class="form-control input-color-name fs-3"
                                    id="inputColorName${editColorVariantLength}"
                                    placeholder="Color name"
                                  />
                                  <input
                                    type="color"
                                    class="form-control form-control-color fs-3"
                                    id="inputColorRgb${editColorVariantLength}"
                                    value="#563d7c"
                                    title="Choose your color"
                                  />
                                </div>
                                <div class="col-12 mt-4">
                                  <input
                                    class="form-control add-product__input-file fs-4"
                                    type="file"
                                    id="inputColorMedia${editColorVariantLength}"
                                    multiple
                                  />
                                  <div class="product-preview" id="productPreview${editColorVariantLength}">
                                    <span class="product-preview__default-text" id="productPreviewDefaultText${editColorVariantLength}"
                                      >Preview Variant</span
                                    >
                                  </div>
                                </div>
                              </div>`;
    const inputFileAddProduct = document.querySelector(
      `#inputColorMedia${editColorVariantLength}`
    );
    const previewContainerAddProduct = document.querySelector(
      `#productPreview${editColorVariantLength}`
    );
    const previewDefaultTextAddProduct = document.querySelector(
      `#productPreviewDefaultText${editColorVariantLength}`
    );
    inputFileAddProduct.addEventListener("change", function () {
      if (this.files.length > 0) {
        let colors = [];
        previewContainerAddProduct.innerHTML = "";
        for (let data of this.files) {
          const previewImage = document.createElement("img");
          const reader = new FileReader();
          reader.addEventListener("load", function () {
            previewImage.setAttribute("src", this.result);
            colors.push(this.result);
            previewContainerAddProduct.appendChild(previewImage);
          });
          reader.readAsDataURL(data);
        }
        colorAddingEditMedia.push(colors);
      } else {
        previewDefaultTextAddProduct.style.display = "block";
        previewContainerAddProduct.innerHTML =
          '<span class="product-preview__default-text">Preview Image</span>';
      }
    });
    editColorVariantLength++;
  };
};
// =============================================

// =============== Edit Update Button Event ================
let editProductUpdateBtn = document.querySelector("#editProductUpdateBtn");
editProductUpdateBtn.addEventListener("click", (event) => {
  let colors = [];
  let editProductTitleInput = document.querySelector("#editProductTitleInput");
  let product = data.initProducts.find(
    (e) => e.id == editProductTitleInput.getAttribute("data-bs")
  );
  let editProductDescriptionInput = document.querySelector(
    "#editProductDescriptionInput"
  );
  let editProductPriceInput = document.querySelector("#editProductPriceInput");
  let editProductPriceCompareInput = document.querySelector(
    "#editProductPriceCompareInput"
  );
  let editProductSizeInput = document.getElementsByName("editProductSizeInput");
  let editProductBrandInput = document.querySelector("#editProductBrandInput");
  let editProductCategoriesInput = document.querySelector(
    "#editProductCategoriesInput"
  );
  let editProductTagsInput = document.querySelector("#editProductTagsInput");
  let editColorContainer = document.querySelector(
    ".edit-product__color-variant"
  );
  let editProductCurrentMedia = document.querySelector(
    ".product-current-media"
  );
  let editProductCurrentColor = document.querySelector(
    ".edit-product-current-color"
  );
  // Cập nhật màu cũ
  for (let e of editProductCurrentColor.children) {
    colors.push(
      product.colors.find((color) => color.rgb === e.getAttribute("data-bs"))
    );
  }
  // Cập nhật màu mới
  if (editColorContainer.children.length > 0) {
    for (let i = 0, length = editColorVariantLength; i < length; i++) {
      let inputColorName = document.querySelector(`#inputColorName${i}`);
      let inputColorRgb = document.querySelector(`#inputColorRgb${i}`);
      colors.push({
        name: inputColorName.value,
        rgb: inputColorRgb.value,
        colorMedia: colorAddingEditMedia[i],
      });
    }
  }
  // Cập nhật media
  for (let e of editProductCurrentMedia.children) {
    editProductMedia.push(
      product.media[Number.parseInt(e.getAttribute("data-bs"))]
    );
  }
  // Lọc Size
  let sizes = [];
  for (let size of editProductSizeInput) {
    if (size.checked === true) {
      sizes.push(size.value);
    }
  }
  // Update product trong data
  data.initProducts[product.id - 1] = {
    id: product.id,
    name: editProductTitleInput.value,
    description: editProductDescriptionInput.value,
    price: editProductPriceInput.value,
    comparePrice: editProductPriceCompareInput.value,
    media: editProductMedia,
    sizing: [...sizes],
    colors: [...colors],
    active: true,
    branding: editProductBrandInput.value.split(", "),
    categories: editProductCategoriesInput.value.split(", "),
    tags: editProductTagsInput.value.split(", "),
  };
  // Update sản phẩm vào localStorage
  window.localStorage.setItem("data", JSON.stringify(data));
});
// ============================================================

let renderProductAdmin = function (products) {
  let productsContainer = document.querySelector(
    ".product-admin-container-tbody"
  );
  products.forEach((product) => {
    let productItem = document.createElement("tr");
    productsContainer.appendChild(productItem);
    let productStatus = product.active ? `active` : `inactive`;
    productItem.outerHTML = `<tr id="product-admin-item-id-${product.id}">
                              <td>
                                <label class="checkbox checkbox-label">
                                  <input type="checkbox" class="admin-product-select"/>
                                  <svg viewBox="0 0 21 21">
                                    <path
                                      d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"
                                    ></path>
                                  </svg>
                                </label>
                              </td>
                              <td>
                                <div class="product-infor">
                                  <img
                                    src="${product.media[0]}"
                                    alt=""
                                    class="product-img"
                                  />
                                  <span class="product-name">${product.name}</span>
                                </div>
                              </td>
                              <td class="product-status-td">
                                <span class="product-status">${productStatus}</span>
                              </td>
                              <td class="product-action">
                                <div class="product-action-btn">
                                  <button
                                    class="product-edit-btn${product.id}"
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editProductModal"
                                  >
                                    <i class="fa-regular fa-pen-to-square"></i>
                                  </button>
                                  <button class="product-delete-btn-${product.id}" type="button" data-bs-toggle="modal"
                                  data-bs-target="#comfirmDeleteProduct">
                                    <i class="fa-regular fa-trash-can"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>`;
  });
  products.forEach((product) => {
    let editBtn = document.querySelector(`.product-edit-btn${product.id}`);
    editBtn.addEventListener("click", (event) => {
      renderEditProductAdmin(product);
    });
  });
  // Edit Button Click Event
  // Select all
  let selectAll = document.querySelector(".admin-product-select-all");
  selectAll.addEventListener("change", (event) => {
    document.querySelectorAll(".admin-product-select").forEach((e) => {
      if (event.target.checked === true) {
        e.checked = true;
      } else {
        e.checked = false;
      }
    });
  });
  let productDeleteComfirm = document.querySelector(".product-delete-comfirm");
  data.initProducts.forEach((product) => {
    let productDeleteBtn = document.querySelector(
      `.product-delete-btn-${product.id}`
    );
    productDeleteBtn.addEventListener("click", () => {
      productDeleteComfirm.addEventListener("click", (event) => {
        data.initProducts.splice(data.initProducts.indexOf(product), 1);
        data.products = data.initProducts.filter((e) => e.active === true);
        productsContainer.removeChild(
          document.querySelector(`#product-admin-item-id-${product.id}`)
        );
        window.localStorage.setItem("data", JSON.stringify(data));
        document.querySelector(".close-modal-delete").click();
      });
    });
  });
};
renderProductAdmin(data.initProducts);
