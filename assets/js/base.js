// ================ Data =================

const initData = {
  initProducts: [
    {
      id: 1,
      name: "Piqué Biker Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: "24",
      comparePrice: "100",
      media: [
        "./assets/img/products/product-1/img-1.avif",
        "./assets/img/products/product-1/img-2.avif",
        "./assets/img/products/product-1/img-3.avif",
        "./assets/img/products/product-1/img-4.avif",
      ],
      sizing: ["XS", "S", "M"],
      colors: [
        {
          name: "Black",
          rgb: "#212222",
          colorMedia: [
            "./assets/img/products/product-1/img-1.avif",
            "./assets/img/products/product-1/img-2.avif",
            "./assets/img/products/product-1/img-3.avif",
            "./assets/img/products/product-1/img-4.avif",
          ],
        },
        {
          name: "Red",
          rgb: "#eeeeee",
          colorMedia: [
            "./assets/img/products/product-2/img-1.avif",
            "./assets/img/products/product-2/img-2.avif",
            "./assets/img/products/product-2/img-3.avif",
            "./assets/img/products/product-2/img-4.avif",
          ],
        },
      ],
      active: true,
      branding: "Gucci",
      categories: ["Men"],
      tags: ["hot trend", "Best Sellers", "New Arrivals", "Hot Sales"],
    },
    {
      id: 2,
      name: "Multi-pocket Chest Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: 50,
      comparePrice: "",
      media: [
        "./assets/img/products/product-2/img-1.avif",
        "./assets/img/products/product-2/img-2.avif",
        "./assets/img/products/product-2/img-3.avif",
        "./assets/img/products/product-2/img-4.avif",
      ],
      sizing: ["M"],
      colors: [
        {
          name: "Red",
          rgb: "#212222",
          colorMedia: [
            "./assets/img/products/product-2/img-1.avif",
            "./assets/img/products/product-2/img-2.avif",
            "./assets/img/products/product-2/img-3.avif",
            "./assets/img/products/product-2/img-4.avif",
          ],
        },
      ],
      active: true,
      branding: "Đôn trề",
      categories: ["Men", "T-shirt"],
      tags: ["bag", "Best Sellers"],
    },
    {
      id: 3,
      name: "Basic Flowing Scarf",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: 20,
      comparePrice: "30",
      media: [
        "./assets/img/products/product-3/img-1.avif",
        "./assets/img/products/product-3/img-2.avif",
        "./assets/img/products/product-3/img-3.avif",
        "./assets/img/products/product-3/img-4.avif",
      ],
      sizing: ["XS", "S", "M"],
      colors: [
        {
          name: "Red",
          rgb: "#212222",
          colorMedia: [
            "./assets/img/products/product-2/img-1.avif",
            "./assets/img/products/product-2/img-2.avif",
            "./assets/img/products/product-2/img-3.avif",
            "./assets/img/products/product-2/img-4.avif",
          ],
        },
      ],
      active: true,
      branding: "Gucci",
      categories: ["Men", "T-shirt"],
      tags: ["hot trend", "Best Sellers", "Hot Sales"],
    },
    {
      id: 4,
      name: "Piqué Biker Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: 200,
      comparePrice: "",
      media: [
        "./assets/img/products/product-4/img-1.avif",
        "./assets/img/products/product-4/img-2.avif",
        "./assets/img/products/product-4/img-3.avif",
        "./assets/img/products/product-4/img-4.avif",
      ],
      sizing: ["XS", "S", "M"],
      colors: [
        {
          name: "Red",
          rgb: "#212222",
          colorMedia: [
            "./assets/img/products/product-2/img-1.avif",
            "./assets/img/products/product-2/img-2.avif",
            "./assets/img/products/product-2/img-3.avif",
            "./assets/img/products/product-2/img-4.avif",
          ],
        },
      ],
      active: true,
      branding: "Gucci",
      categories: ["Men", "T-shirt"],
      tags: ["hot trend", "New Arrivals", "Hot Sales"],
    },
    {
      id: 5,
      name: "Piqué Biker Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: 200,
      comparePrice: "",
      media: [
        "./assets/img/products/product-5/img-1.webp",
        "./assets/img/products/product-5/img-2.avif",
        "./assets/img/products/product-5/img-3.avif",
        "./assets/img/products/product-5/img-4.avif",
      ],
      sizing: ["XS", "S", "M"],
      colors: [
        {
          name: "Red",
          rgb: "#212222",
          colorMedia: [
            "./assets/img/products/product-2/img-1.avif",
            "./assets/img/products/product-2/img-2.avif",
            "./assets/img/products/product-2/img-3.avif",
            "./assets/img/products/product-2/img-4.avif",
          ],
        },
      ],
      active: true,
      branding: "Gucci",
      categories: ["Men", "T-shirt"],
      tags: ["hot trend", "New Arrivals", "Hot Sales"],
    },
    {
      id: 6,
      name: "Piqué Biker Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: 200,
      comparePrice: "",
      media: [
        "./assets/img/products/product-6/img-1.avif",
        "./assets/img/products/product-6/img-2.avif",
        "./assets/img/products/product-6/img-3.avif",
        "./assets/img/products/product-6/img-4.avif",
      ],
      sizing: ["XS", "S", "M"],
      colors: [
        {
          name: "Red",
          rgb: "#212222",
          colorMedia: [
            "./assets/img/products/product-2/img-1.avif",
            "./assets/img/products/product-2/img-2.avif",
            "./assets/img/products/product-2/img-3.avif",
            "./assets/img/products/product-2/img-4.avif",
          ],
        },
      ],
      active: true,
      branding: "Gucci",
      categories: ["women", "clothing"],
      tags: ["hot trend", "New Arrivals", "Hot Sales"],
    },
    {
      id: 7,
      name: "Piqué Biker Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: 200,
      comparePrice: "",
      media: [
        "./assets/img/products/product-7/img-1.avif",
        "./assets/img/products/product-7/img-2.avif",
        "./assets/img/products/product-7/img-3.webp",
        "./assets/img/products/product-7/img-4.avif",
      ],
      sizing: ["XS", "S", "M"],
      colors: [
        {
          name: "Red",
          rgb: "#212222",
          colorMedia: [
            "./assets/img/products/product-2/img-1.avif",
            "./assets/img/products/product-2/img-2.avif",
            "./assets/img/products/product-2/img-3.avif",
            "./assets/img/products/product-2/img-4.avif",
          ],
        },
      ],
      active: true,
      branding: "Gucci",
      categories: ["women", "clothing"],
      tags: ["hot trend", "New Arrivals", "Hot Sales"],
    },
    {
      id: 8,
      name: "Piqué Biker Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: 200,
      comparePrice: "",
      media: [
        "./assets/img/products/product-8/img-1.avif",
        "./assets/img/products/product-8/img-2.avif",
        "./assets/img/products/product-8/img-3.avif",
        "./assets/img/products/product-8/img-4.avif",
      ],
      sizing: ["XS", "S", "M"],
      colors: [
        {
          name: "Red",
          rgb: "#212222",
          colorMedia: [
            "./assets/img/products/product-2/img-1.avif",
            "./assets/img/products/product-2/img-2.avif",
            "./assets/img/products/product-2/img-3.avif",
            "./assets/img/products/product-2/img-4.avif",
          ],
        },
      ],
      active: true,
      branding: "Gucci",
      categories: ["women", "clothing"],
      tags: ["hot trend", "New Arrivals", "Hot Sales"],
    },
    {
      id: 9,
      name: "Piqué Biker Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: 200,
      comparePrice: "",
      media: [
        "./assets/img/products/product-9/img-1.avif",
        "./assets/img/products/product-9/img-2.avif",
        "./assets/img/products/product-9/img-3.avif",
        "./assets/img/products/product-9/img-4.avif",
      ],
      sizing: ["XS", "S", "M"],
      colors: [
        {
          name: "Red",
          rgb: "#212222",
          colorMedia: [
            "./assets/img/products/product-2/img-1.avif",
            "./assets/img/products/product-2/img-2.avif",
            "./assets/img/products/product-2/img-3.avif",
            "./assets/img/products/product-2/img-4.avif",
          ],
        },
      ],
      active: true,
      branding: "Gucci",
      categories: ["women", "clothing"],
      tags: ["hot trend", "New Arrivals", "Hot Sales"],
    },
    {
      id: 10,
      name: "Piqué Biker Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: 200,
      comparePrice: "",
      media: [
        "./assets/img/products/product-10/img-1.avif",
        "./assets/img/products/product-10/img-2.webp",
        "./assets/img/products/product-10/img-3.avif",
        "./assets/img/products/product-10/img-4.avif",
      ],
      sizing: ["XS", "S", "M"],
      colors: [
        {
          name: "Red",
          rgb: "#212222",
          colorMedia: [
            "./assets/img/products/product-2/img-1.avif",
            "./assets/img/products/product-2/img-2.avif",
            "./assets/img/products/product-2/img-3.avif",
            "./assets/img/products/product-2/img-4.avif",
          ],
        },
      ],
      active: true,
      branding: "Gucci",
      categories: ["women", "clothing"],
      tags: ["hot trend", "New Arrivals", "Hot Sales"],
    },
    {
      id: 11,
      name: "Piqué Biker Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: 200,
      comparePrice: "",
      media: [
        "./assets/img/products/product-11/img-1.avif",
        "./assets/img/products/product-11/img-2.avif",
        "./assets/img/products/product-11/img-3.avif",
        "./assets/img/products/product-11/img-4.avif",
      ],
      sizing: ["XS", "S", "M"],
      colors: [
        {
          name: "Red",
          rgb: "#212222",
          colorMedia: [
            "./assets/img/products/product-2/img-1.avif",
            "./assets/img/products/product-2/img-2.avif",
            "./assets/img/products/product-2/img-3.avif",
            "./assets/img/products/product-2/img-4.avif",
          ],
        },
      ],
      active: false,
      branding: "Gucci",
      categories: ["women", "clothing"],
      tags: ["hot trend", "New Arrivals", "Hot Sales"],
    },
    {
      id: 12,
      name: "Piqué Biker Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid, sapiente, porro voluptate eum facilis unde ad, aperiam accusantium blanditiis velit mollitia reprehenderit voluptates iusto ducimus delectus adipisci. Recusandae, provident!",
      price: 200,
      comparePrice: "",
      media: [
        "./assets/img/products/product-12/img-1.avif",
        "./assets/img/products/product-12/img-2.avif",
        "./assets/img/products/product-12/img-3.avif",
        "./assets/img/products/product-12/img-4.avif",
      ],
      sizing: ["XS", "S", "M"],
      colors: [],
      active: true,
      branding: "Gucci",
      categories: ["women", "clothing"],
      tags: ["hot trend", "New Arrivals", "Hot Sales"],
    },
  ],
  cart: [],
  orders: [],
  ordered: [],
  productDetail: null,
  users: [
    {
      id: 1,
      username: "Dothanhtungnb602@gmail.com",
      password: "Tung2001",
      firstName: "Do",
      lastName: "Tung",
      phoneNumber: "0928986343",
      avatar: "./assets/img/default-user.jpg",
    },
  ],
  admin: [
    {
      username: "Admin",
      password: "1234"
    }
  ],
  isUserLogIn: false,
  isAdminLogIn: false,
};
if(!window.localStorage.getItem("data")){
  window.localStorage.setItem("data", JSON.stringify(initData));
}
// ================= Base JS ===================

const data = JSON.parse(window.localStorage.getItem("data"));
data.products = data.initProducts.filter((e) => e.active === true);
let productsQuanlity = document.querySelector(".products-quanlity");
function alert(message, type) {
  var wrapper = document.createElement("div");
  let href = (type === "success" && "#check-circle-fill") || ((type === "warning" || type === "danger") && "#exclamation-triangle-fill");
  wrapper.innerHTML = `<div class="alert alert-${type} d-flex align-items-center" role="alert">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="${type[0].toUpperCase() + type.slice(1)}:"><use xlink:href="${href}"/></svg>
                        <div>
                          ${message}
                        </div>
                      </div>`;
  document.querySelector("#liveAlertPlaceholder").append(wrapper);
  setTimeout(() => {
    wrapper.classList.add("alert-fadeout");
  }, 1000);
  setTimeout(() => {
    wrapper.style.display = "none";
  }, 2000);
}

let renderNavbarCart = function (cart) {
  let navbarCartContainer = document.querySelector(".navbar-cart-content");
  let navbarCartLink = document.querySelector(".navbar-cart-btn");
  if (data.cart.length === 0) {
    navbarCartContainer.innerHTML = ` <p class="fs-3 h-100 text-center p-0 m-0 align-items-center d-flex justify-content-center">No Products Yet</p>`;
  }
  if (data.cart.length != 0) {
    navbarCartContainer.innerHTML = "";
    data.cart.forEach((cart) => {
      let colorVariant = cart.color ? ` | Color: ${cart.color.name}` : "";
      let product = data.products.find((e) => e.id === cart.id);
      let cartImage = cart.color ? `${cart.color.colorMedia[0]}` : `${product.media[0]}`;
      let navbarCartItem = document.createElement("div");
      navbarCartContainer.appendChild(navbarCartItem);
      navbarCartItem.outerHTML = `<div class="navbar-cart-item">
                                  <img
                                    src="${cartImage}"
                                    alt=""
                                    class="navbar-cart-img"
                                  />
                                  <p class="navbar-cart-desc">${product.name}</br>Size: ${cart.size}${colorVariant}</p>
                                  <span class="navbar-cart-price">$ ${product.price}</span>
                                </div>`;
    });
  }
  if (!data.isUserLogIn) {
    navbarCartLink.href = "./account.html";
    navbarCartContainer.innerHTML = "";
  }
};
renderNavbarCart(data.cart);

// ========== Render Products ===========

let renderProducts = function (products, size) {
  let productsContainer = document.querySelector(".products-container");
  productsQuanlity.innerHTML = `Showing ${products.length} results`;
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    let item = document.createElement("div");
    productsContainer.appendChild(item);
    item.outerHTML = `<div class="product-item col-sm-6 col-lg-${size}">
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
                              <a href="./account.html" class="product-add id-${
                                product.id
                              }">+ Add To Cart</a>
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
    addCartBtn.addEventListener("click", (event) => {
      if (data.isUserLogIn) {
        event.preventDefault();
        let cartItem = {
          id: product.id,
          size: product.sizing[0],
          color: product.colors[0],
        };
        if (
          data.cart.every((e) => JSON.stringify(e) !== JSON.stringify(cartItem))
        ) {
          data.cart.push(cartItem);
          alert("Added to cart", "success");
        } else {
          alert("Already added!", "warning");
        }
        window.localStorage.setItem("data", JSON.stringify(data));
        renderNavbarCart(data.cart);
      }
    });
  });
};

// =========== User action =============
let userAction = document.querySelector(".user-action");
if (!data.isUserLogIn) {
  userAction.innerHTML = `<a href="./account.html" class="user-link">Log in</a>
                          <a href="./account.html" class="user-link">Sign in</a>`;
} else {
  userAction.innerHTML = `<a href="./profile.html" class="user-link">My Profile</a>
                          <a href="./index.html" class="user-link" id="logOutBtn">Log out</a>`;
  document.querySelector("#logOutBtn").addEventListener("click", event => {
    data.isUserLogIn = false;
    window.localStorage.setItem("data", JSON.stringify(data));
  })
}

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
