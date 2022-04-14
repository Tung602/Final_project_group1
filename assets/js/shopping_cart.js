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

renderShoppingCart(data.cart);
