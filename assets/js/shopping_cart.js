let shoppingCartContainer = document.querySelector(".shopping-cart__content");
let proceedToCheckoutBtn = document.querySelector(".proceed-to-checkout");
let renderEditShoppingCart = (cart) => {
  let product = data.products.find((e) => e.id === cart.id);
  let productSizeContainer = document.querySelector(
    ".shop-detail-sizing-option"
  );
  let productColorContainer = document.querySelector(
    "#shop-detail-color-select"
  );
  let productColorRepresent = document.querySelector(
    ".shop-detail-color-represent"
  );
  let productSaveChangeBtn = document.querySelector(
    ".shopping-cart-save-change-btn"
  );
  let productEditImage = document.querySelector(".shopping-cart-edit-img");
  productEditImage.src = product.media[0];
  productSizeContainer.innerHTML = "";
  productColorContainer.innerHTML = "";
  productColorRepresent.innerHTML = "";
  product.sizing.forEach((e, index) => {
    let productSize = document.createElement("div");
    productSizeContainer.appendChild(productSize);
    productSize.innerHTML = `<input
                              type="radio"
                              class="btn-check"
                              value="${e}"
                              name="shopDetailSizeOptions"
                              id="option${index + 1}"/>
                            <label class="btn btn-secondary item-size" for="option${
                              index + 1
                            }">${e}</label>`;
  });
  let productSizeChecked = document.querySelectorAll(
    "input[name='shopDetailSizeOptions']"
  );
  productSizeChecked.forEach((e) => {
    if (e.value === cart.size) {
      e.checked = true;
    }
  });
  if (product.colors.length === 0) {
    document.querySelector(".shop-detail-color-container").style.display =
      "none";
  } else {
    product.colors.forEach((color) => {
      let productColor = document.createElement("div");
      productColorContainer.appendChild(productColor);
      productColor.outerHTML = `<option value="${color.rgb}" class="shop-detail-color-item">${color.name}</option>`;
    });
    productColorContainer.onchange = () => {
      productColorRepresent.style.backgroundColor = `${productColorContainer.value}`;
      productEditImage.src = product.colors.find(
        (e) => e.rgb === productColorContainer.value
      ).colorMedia[0];
    };
    productColorContainer.value = `${cart.color.rgb}`;
    productEditImage.src = product.colors.find(
      (e) => e.rgb === productColorContainer.value
    ).colorMedia[0];
  }
  productColorRepresent.style.backgroundColor = `${productColorContainer.value}`;
  productSaveChangeBtn.addEventListener("click", (event) => {
    let cartItem = { ...cart };
    cartItem.size = document.querySelector(
      "input[name='shopDetailSizeOptions']:checked"
    ).value;
    cartItem.color = product.colors.find(
      (e) => e.rgb === productColorContainer.value
    );
    let check = data.cart.every(
      (e) => JSON.stringify(e) !== JSON.stringify(cartItem)
    );
    if (check) {
      data.cart[data.cart.indexOf(cart)] = { ...cartItem };
      alert("Updated", "success");
      window.localStorage.setItem("data", JSON.stringify(data));
      renderNavbarCart(data.cart);
      renderShoppingCart(data.cart);
    } else {
      event.preventDefault();
      alert("Variant already exist in your cart", "warning");
    }
  });
};

let renderShoppingCart = function (carts) {
  shoppingCartContainer.innerHTML = "";
  let cartFinalPrice = document.querySelector(".cart-final-price");
  carts.forEach((cart) => {
    let product = data.products.find((element) => element.id === cart.id);
    let colorId = cart.color ? `${cart.color.rgb.slice(1)}` : ``;
    let cartImage = cart.color
      ? `${cart.color.colorMedia[0]}`
      : `${product.media[0]}`;
    let colorName = cart.color ? ` | ${cart.color.name}` : ``;
    let shoppingCartItem = document.createElement("div");
    shoppingCartContainer.appendChild(shoppingCartItem);
    shoppingCartItem.outerHTML = `<tr id="cart-item-id-${product.id}-${cart.size}-${colorId}">
                                        <td class="product-cart-item">
                                        <div class="product-cart-item-pic">
                                            <img
                                            src="${cartImage}"
                                            alt=""
                                            />
                                        </div>
                                        <div class="product-cart-item-text">
                                            <h6 class="product-cart-name">${product.name}</h6>
                                            <p class="product-variant">Size: ${cart.size}${colorName}</p>
                                            <button class="shopping-cart-variant-edit-btn" id="cart-edit-id-${product.id}-${cart.size}-${colorId}" data-bs-toggle="modal" data-bs-target="#shoppingCartModal"> Edit</button>
                                            <h5 class="product-cart-price">$${product.price}</h5>
                                        </div>
                                        </td>
                                        <td class="quantity-item text-center mx-sm-5">
                                        <div class="quantity">
                                            <div class="pro-qty-2">
                                            <button class="fa fa-angle-left dec qtybtn cart-more-btn" id="cart-less-id-${product.id}-${cart.size}-${colorId}"></button>
                                            <input type="text" value="1" class="product-quantity id-${product.id}-${cart.size}-${colorId}" />
                                            <button class="fa fa-angle-right inc qtybtn cart-less-btn" id="cart-more-id-${product.id}-${cart.size}-${colorId}"></button>
                                            </div>
                                        </div>
                                        </td>
                                        <td class="cart-total-price text-center" id="cart-price-total-id-${product.id}-${cart.size}-${colorId}">$ ${product.price}</td>
                                        <td class="cart-close text-center">
                                        <button class="cart-close-btn id-${product.id}-${cart.size}-${colorId}">
                                            <i class="fa fa-close"></i>
                                        </button>
                                        </td>
                                    </tr>`;
  });
  let cartTotalPriceAll = document.querySelectorAll(".cart-total-price");
  let cartFinalPriceMethod = () => {
    let total = 0;
    cartTotalPriceAll.forEach((e) => {
      total += Number.parseInt(
        e.innerHTML.substring(e.innerHTML.indexOf(" ") + 1)
      );
    });
    return total;
  };
  carts.forEach((cart) => {
    let colorId = cart.color ? `${cart.color.rgb.slice(1)}` : ``;
    let product = data.products.find((element) => element.id === cart.id);
    let cartMoreBtn = document.querySelector(
      `#cart-more-id-${product.id}-${cart.size}-${colorId}`
    );
    let cartLessBtn = document.querySelector(
      `#cart-less-id-${product.id}-${cart.size}-${colorId}`
    );
    let productQuantity = document.querySelector(
      `.product-quantity.id-${product.id}-${cart.size}-${colorId}`
    );
    let cartPriceTotal = document.querySelector(
      `#cart-price-total-id-${product.id}-${cart.size}-${colorId}`
    );
    let cartCloseBtn = document.querySelector(
      `.cart-close-btn.id-${product.id}-${cart.size}-${colorId}`
    );
    let cartEditBtn = document.querySelector(
      `#cart-edit-id-${product.id}-${cart.size}-${colorId}`
    );
    cartEditBtn.addEventListener("click", (event) => {
      renderEditShoppingCart(cart);
    });
    cartFinalPrice.innerHTML = `$ ${cartFinalPriceMethod()}`;
    cartMoreBtn.addEventListener("click", (e) => {
      productQuantity.value = Number.parseInt(productQuantity.value) + 1;
      cartPriceTotal.innerHTML = `$ ${
        Number.parseInt(productQuantity.value) * product.price
      }`;
      cartFinalPrice.innerHTML = `$ ${cartFinalPriceMethod()}`;
    });
    cartLessBtn.addEventListener("click", (e) => {
      if (productQuantity.value != 1) {
        productQuantity.value = Number.parseInt(productQuantity.value) - 1;
        cartPriceTotal.innerHTML = `$ ${
          Number.parseInt(productQuantity.value) * product.price
        }`;
      }
      cartFinalPrice.innerHTML = `$ ${cartFinalPriceMethod()}`;
    });
    cartCloseBtn.addEventListener("click", (e) => {
      shoppingCartContainer.removeChild(
        document.querySelector(
          `#cart-item-id-${product.id}-${cart.size}-${colorId}`
        )
      );
      carts.splice(carts.indexOf(cart), 1);
      renderNavbarCart(data.cart);
      window.localStorage.setItem("data", JSON.stringify(data));
      cartFinalPrice.innerHTML = `$ ${carts
        .map((e) => data.products.find((element) => element.id === cart.id))
        .reduce((total, num) => total + Number.parseInt(num.price), 0)}`;
      cartTotalPriceAll = document.querySelectorAll(".cart-total-price");
      cartFinalPrice.innerHTML = `$ ${cartFinalPriceMethod()}`;
    });
  });
  proceedToCheckoutBtn.addEventListener("click", (event) => {
    if (carts.length == 0) {
      event.preventDefault();
      alert("Không có sản phẩm nào trong giỏ hàng", "warning");
    } else {
      let order = {};
      let products = carts.map((cart) => {
        let colorId = cart.color ? `${cart.color.rgb.slice(1)}` : ``;
        let product = data.products.find((element) => element.id === cart.id);
        let productQuantity = document.querySelector(
          `.product-quantity.id-${product.id}-${cart.size}-${colorId}`
        );
        let cartPriceTotal = document.querySelector(
          `#cart-price-total-id-${product.id}-${cart.size}-${colorId}`
        );
        return {
          id: product.id,
          name: product.name,
          size: cart.size,
          color: cart.color.name,
          quantity: productQuantity.value,
          totalPrice: Number.parseInt(
            cartPriceTotal.innerHTML.substring(
              cartPriceTotal.innerHTML.indexOf(" ") + 1
            )
          ),
        };
      });

      order.products = products;
      order.totalPrice = cartFinalPriceMethod();
      data.orders.push(order);
      window.localStorage.setItem("data", JSON.stringify(data));
    }
  });
};

renderShoppingCart(data.cart);
