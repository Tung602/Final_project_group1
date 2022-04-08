let shoppingCartContainer = document.querySelector(".shopping-cart__content");
let proceedToCheckoutBtn = document.querySelector(".proceed-to-checkout");

let renderShoppingCart = function (cart) {
  shoppingCartContainer.innerHTML = "";
  let cartFinalPrice = document.querySelector(".cart-final-price");
  cart.forEach((e) => {
    let product = data.products.find((element) => element.id === e);
    let shoppingCartItem = document.createElement("div");
    shoppingCartContainer.appendChild(shoppingCartItem);
    shoppingCartItem.outerHTML = `<tr id="cart-item-id-${product.id}">
                                        <td class="product-cart-item">
                                        <div class="product-cart-item-pic">
                                            <img
                                            src="${product.media[0]}"
                                            alt=""
                                            />
                                        </div>
                                        <div class="product-cart-item-text">
                                            <h6 class="product-cart-name">${product.name}</h6>
                                            <h5 class="product-cart-price">$${product.price}</h5>
                                        </div>
                                        </td>
                                        <td class="quantity-item text-center mx-sm-5">
                                        <div class="quantity">
                                            <div class="pro-qty-2">
                                            <button class="fa fa-angle-left dec qtybtn cart-more-btn" id="cart-less-id-${product.id}"></button>
                                            <input type="text" value="1" class="product-quantity id-${product.id}" />
                                            <button class="fa fa-angle-right inc qtybtn cart-less-btn" id="cart-more-id-${product.id}"></button>
                                            </div>
                                        </div>
                                        </td>
                                        <td class="cart-total-price text-center" id="cart-price-total-id-${product.id}">$ ${product.price}</td>
                                        <td class="cart-close text-center">
                                        <button class="cart-close-btn id-${product.id}">
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
  data.products
    .filter((e) => cart.includes(e.id))
    .forEach((product) => {
      let cartMoreBtn = document.querySelector(`#cart-more-id-${product.id}`);
      let cartLessBtn = document.querySelector(`#cart-less-id-${product.id}`);
      let productQuantity = document.querySelector(
        `.product-quantity.id-${product.id}`
      );
      let cartPriceTotal = document.querySelector(
        `#cart-price-total-id-${product.id}`
      );
      let cartCloseBtn = document.querySelector(
        `.cart-close-btn.id-${product.id}`
      );
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
          document.querySelector(`#cart-item-id-${product.id}`)
        );
        data.cart.splice(data.cart.indexOf(product.id), 1);
        window.localStorage.setItem("data", JSON.stringify(data));
        cartFinalPrice.innerHTML = `$ ${data.products
          .filter((e) => cart.includes(e.id))
          .reduce((total, num) => total + Number.parseInt(num.price), 0)}`;
        cartTotalPriceAll = document.querySelectorAll(".cart-total-price");
        cartFinalPrice.innerHTML = `$ ${cartFinalPriceMethod()}`;
      });
    });
  proceedToCheckoutBtn.addEventListener("click", (event) => {
    if (cart.length == 0) {
      event.preventDefault();
      alert("Không có sản phẩm nào trong giỏ hàng");
    } else {
      let order = {};
      let products = data.products
        .filter((e) => cart.includes(e.id))
        .map((product) => {
          let productQuantity = document.querySelector(
            `.product-quantity.id-${product.id}`
          );
          let cartPriceTotal = document.querySelector(
            `#cart-price-total-id-${product.id}`
          );
          return {
            id: product.id,
            name: product.name,
            quantity: productQuantity.value,
            totalPrice: Number.parseInt(
              cartPriceTotal.innerHTML.substring(
                cartPriceTotal.innerHTML.indexOf(" ") + 1
              )
            ),
          };
        });
      order.products = products;
      order.active = false;
      order.totalPrice = cartFinalPriceMethod();
      data.orders.push(order);
      window.localStorage.setItem("data", JSON.stringify(data));
    }
  });
};
renderShoppingCart(data.cart);
