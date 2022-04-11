// =============== choose picture(shop-detail) ================
function changeImage(a) {
  document.getElementById("shop-detail-img-big").src = a;
}

// =============== choose content(shop-detail) ================
function openParagraph(evt, p) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(
    "shop-detail-content-paragraph-tabcontent"
  );
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName(
    "shop-detail-content-paragraph-tablinks"
  );

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" lineRed", "");
  }
  document.getElementById(p).style.display = "block";
  evt.currentTarget.className += " lineRed";
}

//  ================ Render img colection ================

// ================ Render product information ===============

let renderProductInfor = (productId) => {
  // Render Image
  let product = data.initProducts.find((e) => e.id === productId);
  document.getElementById("shop-detail-img-big").src = `${product.media[0]}`;
  let imgColectionContainer = document.querySelector(
    ".shop-detail-img-colection"
  );
  product.media.forEach((image) => {
    let imgColectionItem = document.createElement("div");
    imgColectionContainer.appendChild(imgColectionItem);
    imgColectionItem.outerHTML = `<div class="img-colection-item">
                                  <img
                                    src="${image}"
                                    alt="Hình ảnh"
                                    onclick = "changeImage('${image}')"
                                  />
                                </div>`;
  });
  document.querySelector(".shop-detail-product-name").innerHTML = product.name;
  document.querySelector(
    ".shop-detail-product-price"
  ).innerHTML = `$${product.price}.00<span class="shop-detail-product-compare-price">${product.comparePrice}</span>`;
  let productSizeContainer = document.querySelector(
    ".shop-detail-sizing-option"
  );
  let productColorContainer = document.querySelector(
    "#shop-detail-color-select"
  );
  let productColorRepresent = document.querySelector(
    ".shop-detail-color-represent"
  );
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
  if (product.colors.length === 0) {
    document.querySelector(".shop-detail-color-container").style.display =
      "none";
  } else {
    product.colors.forEach((color) => {
      let productColor = document.createElement("div");
      productColorContainer.appendChild(productColor);
      productColor.outerHTML = `<option value="${color.rgb}" class="shop-detail-color-item">${color.name}</option>`;
    });
    productColorRepresent.style.backgroundColor = `${productColorContainer.value}`;
    productColorContainer.onchange = () => {
      productColorRepresent.style.backgroundColor = `${productColorContainer.value}`;
      imgColectionContainer.innerHTML = "";
      product.colors
        .find((e) => e.rgb === productColorContainer.value)
        .colorMedia.forEach((image, index, array) => {
          changeImage(array[0]);
          let imgColectionItem = document.createElement("div");
          imgColectionContainer.appendChild(imgColectionItem);
          imgColectionItem.outerHTML = `<div class="img-colection-item">
                                      <img
                                        src="${image}"
                                        alt="Hình ảnh"
                                        onclick = "changeImage('${image}')"
                                      />
                                    </div>`;
        });
    };
  }
  document.querySelector(".shop-detail-product-categories").innerHTML =
    product.categories.join(", ");
  document.querySelector(".shop-detail-product-tags").innerHTML =
    product.tags.join(", ");
  let shopDetailAddBtn = document.querySelector(".shop-detail-add-btn");
  let productSize = document.getElementsByName("shopDetailSizeOptions");
  let productSizeAlert = document.querySelector(".shop-detail-size-alert");
  document.querySelector(".shop-detail-product-description").innerHTML =
    product.description;
  productSize.forEach((e) => {
    e.addEventListener("click", (event) => {
      productSizeAlert.classList.remove("active");
    });
  });
  shopDetailAddBtn.addEventListener("click", (event) => {
    let isChecked = (size) => {
      for (let i = 0, length = size.length; i < length; i++) {
        if (size[i].checked) {
          return true;
        }
      }
      return false;
    };
    if (!isChecked(productSize)) {
      productSizeAlert.classList.add("active");
    } else {
      let cartItem = {
        id: product.id,
        size: document.querySelector(
          'input[name="shopDetailSizeOptions"]:checked'
        ).value,
        color: product.colors.find(
          (e) => e.rgb === productColorContainer.value
        ),
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
  // ================ Render Related Products =============
  renderProducts(
    data.products
      .filter((e) => {
        return (
          e.categories.length === product.categories.length &&
          e.categories.every(
            (value, index) => value === product.categories[index]
          )
        );
      })
      .filter((e) => e !== product),
    3
  );
};
renderProductInfor(data.productDetail);
