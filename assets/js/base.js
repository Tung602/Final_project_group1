// ================ Data =================

// const initData = {
//   products: [
//     {
//       id: 1,
//       name: "Piqué Biker Jacket",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
//       price: "24",
//       comparePrice: 100,
//       media: ["./assets/img/product/product-1.jpg"],
//       sizing: ["XS", "S", "M"],
//       active: true,
//       branding: "Gucci",
//       categories: ["men", "women", "clothing"],
//       tags: ["hot trend"],
//     },
//     {
//       id: 2,
//       name: "Multi-pocket Chest Bag",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
//       price: 50,
//       comparePrice: "",
//       media: ["./assets/img/product/product-2.jpg"],
//       sizing: ["M"],
//       active: true,
//       branding: "Đôn trề",
//       categories: ["men", "women", "bag"],
//       tags: ["bag"],
//     },
//     {
//       id: 3,
//       name: "Basic Flowing Scarf",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
//       price: 20,
//       comparePrice: "30",
//       media: ["./assets/img/product/product-3.jpg"],
//       sizing: ["XS", "S", "M"],
//       active: true,
//       branding: "Gucci",
//       categories: ["men", "women", "clothing"],
//       tags: ["hot trend"],
//     },
//     {
//       id: 4,
//       name: "Piqué Biker Jacket",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
//       price: 200,
//       comparePrice: "",
//       media: ["./assets/img/product/product-4.jpg"],
//       sizing: ["XS", "S", "M"],
//       active: true,
//       branding: "Gucci",
//       categories: ["women", "clothing"],
//       tags: ["hot trend"],
//     },
//   ],
//   cart: [],
//   productDetail: null,

// }

// window.localStorage.setItem("data", JSON.stringify(initData));

const data = JSON.parse(window.localStorage.getItem("data"));
let productsQuanlity = document.querySelector(".products-quanlity");

let renderProducts = function (products) {
  productsQuanlity.innerHTML = `Showing ${products.length} results`;
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    let item = document.createElement("div");
    productsContainer.appendChild(item);
    item.outerHTML = `<div class="product-item col-sm-6 col-lg-4">
                          <div class="product-item-header">
                              <img
                              src="${product.media[0]}"
                              class="product-item-img id-${product.id}"
                              alt="product image"
                              />
                              ${isProductSale(product.comparePrice)}
                              <div class="product-item-action">
                                  <button class="product-like">
                                      <i class="fa-regular fa-heart"></i>
                                  </button>
                                  <a href="./shop-details.html" class="product-infor id-${
                                    product.id
                                  }"
                                      ><i class="fa-solid fa-magnifying-glass"></i
                                  ></a>
                              </div>
                          </div>
                          <div class="product-item-text">
                              <button class="product-add id-${
                                product.id
                              }">+ Add To Cart</button>
                              <p class="product-desc">${product.name}</p>
                              <div class="product-rate">
                                  <i class="fa-solid fa-star"></i
                                  ><i class="fa-solid fa-star"></i
                                  ><i class="fa-solid fa-star"></i
                                  ><i class="fa-solid fa-star"></i
                                  ><i class="fa-solid fa-star"></i>
                              </div>
                              <span class="product-price">$${
                                product.price
                              }</span>
                              <div class="product-color">
                                <label
                                    for="colorPicker"
                                    class="color-picker-label id-${product.id}"
                                ></label>
                                <input
                                    class="color-picker id-${product.id}"
                                    name="colorPicker"
                                    type="radio"
                                />
                                <label
                                    for="colorPicker"
                                    class="color-picker-label id-${product.id}"
                                ></label>
                                <input
                                    class="color-picker id-${product.id}"
                                    name="colorPicker"
                                    type="radio"
                                />
                                <label
                                    for="colorPicker"
                                    class="color-picker-label id-${product.id}"
                                ></label>
                                <input
                                    class="color-picker id-${product.id}"
                                    name="colorPicker"
                                    type="radio"
                                />
                              </div>
                          </div>
                      </div>`;

    // =============== Product image select ================

    let colorPicker = document.querySelectorAll(
      `.color-picker.id-${product.id}`
    );
    let productImg = document.querySelector(
      `.product-item-img.id-${product.id}`
    );
    let colorLabel = document.querySelectorAll(
      `.color-picker-label.id-${product.id}`
    );
    colorPicker.forEach((e, index) => {
      colorPicker[index].addEventListener("change", () => {
        colorLabel[index].classList.add("active");
        productImg.src = product.media[index];
        [...colorLabel]
          .filter((e, i) => i != index)
          .forEach((e) => {
            e.classList.remove("active");
          });
      });
    });

    // ============= Set Product Details ==============
    let productInfor = document.querySelector(
      `.product-infor.id-${product.id}`
    );
    productInfor.addEventListener("click", () => {
      data.productDetail = product.id;
      window.localStorage.setItem("data", JSON.stringify(data));
    });
    // ============= Product add to cart ===============
    let addCartBtn = document.querySelector(`.product-add.id-${product.id}`);
    addCartBtn.onclick = () => {
      data.cart.push(product.id);
      window.localStorage.setItem("data", JSON.stringify(data));
    };
  });
};

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

let isProductSale = (status) => {
  if (status !== "") {
    return `<span class="product-item-status">Sale</span>`;
  } else {
    return "";
  }
};
