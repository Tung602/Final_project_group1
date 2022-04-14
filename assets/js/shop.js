//  =========== Render products from local storage =========
let categoriesContainer = document.querySelector(".shop-categories-list");
let brandingContainer = document.querySelector(".shop-branding-list");
let tagsContainer = document.querySelector(".shop-tags-list");
let shopSearchInput = document.querySelector(".shop-search-input");
let shopSearchButton = document.querySelector(".shop-search-btn");
var alertPlaceholder = document.getElementById("liveAlertPlaceholder");

renderProducts(data.products, 4);

let searchProducts = function (products) {
  shopSearchButton.addEventListener("click", (event) => {
    if (products.find((e) => e.name === shopSearchInput.value)) {
      renderProducts([products.find((e) => e.name === shopSearchInput.value)]);
    } else {
      renderProducts([], 4);
    }
  });
};
searchProducts(data.products);

// Hàm lọc sản phẩm theo kích cỡ
let filterProductsBySize = function (products) {
  let productSizingSelect = document.querySelectorAll(".btn-check");
  // Bắt sự kiện của Size button và xử lý lọc sản phẩm theo Size
  productSizingSelect.forEach((e) => {
    e.addEventListener("click", (event) => {
      event.preventDefault();
      renderProducts(
        products.filter((product) => product.sizing.includes(event.target.id)),
        4
      );
    });
  });
};

// Hàm lọc sản phẩm theo giá
let filterProductsByPrice = function (products) {
  let productPriceShow = document.querySelector(".sorted-item-menu");
  let productPriceLowToHigh = document.querySelector(".price-low-to-high");
  let productPrice_0_50 = document.querySelector(".price-0_50");
  let productPrice_50_100 = document.querySelector(".price-50_100");
  let productPrice_100_150 = document.querySelector(".price-100_150");
  let productPrice_150_200 = document.querySelector(".price-150_200");
  let productPrice_200 = document.querySelector(".price-200");
  productPriceLowToHigh.addEventListener("click", (event) => {
    renderProducts(
      products.concat().sort((a, b) => a.price - b.price),
      4
    );
    productPriceShow.innerHTML = "Low To High";
  });
  productPrice_0_50.addEventListener("click", (event) => {
    renderProducts(
      products.filter((e) => e.price >= 0 && e.price < 50),
      4
    );
    productPriceShow.innerHTML = "$0 - $50";
  });
  productPrice_50_100.addEventListener("click", (event) => {
    renderProducts(
      products.filter((e) => e.price >= 50 && e.price < 100),
      4
    );
    productPriceShow.innerHTML = "$50 - $100";
  });
  productPrice_100_150.addEventListener("click", (event) => {
    renderProducts(
      products.filter((e) => e.price >= 100 && e.price < 150),
      4
    );
    productPriceShow.innerHTML = "$100 - $150";
  });
  productPrice_150_200.addEventListener("click", (event) => {
    renderProducts(
      products.filter((e) => e.price >= 150 && e.price < 200),
      4
    );
    productPriceShow.innerHTML = "$150 - $200";
  });
  productPrice_200.addEventListener("click", (event) => {
    renderProducts(
      products.filter((e) => e.price >= 200),
      4
    );
    productPriceShow.innerHTML = "$200+";
  });
};

//  Hàm render categories filter và gắn sự kiện cho categories button
let renderCategoriesFilter = function (products) {
  categoriesContainer.innerHTML =  "";
  let categoriesList = [];
  // Tìm kiếm categories trong localStorage
  products.forEach((e) => {
    for (let i of e.categories) {
      if (!categoriesList.includes(i)) {
        categoriesList.push(i);
      }
    }
  });
  // render categories
  categoriesList.forEach((category) => {
    let categoriesItem = document.createElement("div");
    categoriesContainer.appendChild(categoriesItem);
    categoriesItem.outerHTML = `<li><button id="${category}" class="filter-btn categories-btn">${category}</button></li>`;
  });
  // Bắt sự kiện categories button và xử lý lọc sản phẩm theo categories
  let categoriesBtn = document.querySelectorAll(".categories-btn");
  categoriesBtn.forEach((e) => {
    e.addEventListener("click", (event) => {
      renderProducts(
        products.filter((product) =>
          product.categories.includes(event.target.id)
        ),
        4
      );
    });
  });
};

//  Hàm render tags filter và gắn sự kiện cho tags button
let renderTagsFilter = function (products) {
  tagsContainer.innerHTML = "";
  let tagsList = [];
  // Tìm kiếm tags trong localStorage
  products.forEach((e) => {
    for (let i of e.tags) {
      if (!tagsList.includes(i)) {
        tagsList.push(i);
      }
    }
  });
  // render tags
  tagsList.forEach((tag) => {
    let tagItem = document.createElement("div");
    tagsContainer.appendChild(tagItem);
    tagItem.outerHTML = `<li class="tag"><button id="${tag}" class="shop-detail-information-card-item-tag tag-btn">${tag}</button></li>`;
  });
  // Bắt sự kiện tags button và xử lý lọc sản phẩm theo tags
  let tagsBtn = document.querySelectorAll(".tag-btn");
  tagsBtn.forEach((e) => {
    e.addEventListener("click", (event) => {
      renderProducts(
        products.filter((product) => product.tags.includes(event.target.id)),
        4
      );
    });
  });
};

//  Hàm render Brand filter và gắn sự kiện cho Brand button

let renderBrandingFilter = function (products) {
  brandingContainer.innerHTML = "";
  let brandingList = [];
  // Tìm kiếm Brand trong localStorage
  products.forEach((e) => {
    if (!brandingList.includes(e.branding)) {
      brandingList.push(e.branding);
    }
  });
  // render Brand
  brandingList.forEach((brand) => {
    let brandItem = document.createElement("div");
    brandingContainer.appendChild(brandItem);
    brandItem.outerHTML = `<li><button id="${brand}" class="filter-btn brand-btn">${brand}</button></li>`;
  });
  // Bắt sự kiện Brand button và xử lý lọc sản phẩm theo Brand
  let brandBtn = document.querySelectorAll(".brand-btn");
  brandBtn.forEach((e) => {
    e.addEventListener("click", (event) => {
      renderProducts(
        products.filter((product) => product.branding === event.target.id),
        4
      );
    });
  });
};
renderCategoriesFilter(data.products);
renderBrandingFilter(data.products);
renderTagsFilter(data.products);
filterProductsBySize(data.products);
filterProductsByPrice(data.products);
