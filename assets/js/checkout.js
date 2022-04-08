let checkoutProductsContainer = document.querySelector(
  ".checkout-total-product"
);
let checkoutPlaceOrder = document.querySelector(".place-order-btn");
let checkoutFirstName = document.querySelector(".checkout-input-firstname");
let checkoutLastName = document.querySelector(".checkout-input-lastname");
let checkoutAddress = document.querySelector(".checkout-input-address");
let checkoutPhoneNumber = document.querySelector(".checkout-input-phonenumber");
let checkoutEmail = document.querySelector(".checkout-input-email");
let checkBoxOrderNotes = document.querySelector(".checkbox-order-notes");
let checkoutOrderNotes = document.querySelector(".checkout-input-ordernotes");
let checkoutTotalAll = document.querySelector(".checkout-total-all");
let checkoutPayment = document.querySelectorAll(".checkout-payment-method");
let renderCheckoutProducts = function (order) {
  order.products.forEach((product) => {
    let checkoutProductItem = document.createElement("li");
    checkoutProductsContainer.appendChild(checkoutProductItem);
    checkoutProductItem.innerHTML = `${product.name} (${product.quantity})
                                            <span>$ ${product.totalPrice}</span>`;
  });
  let checkoutTotalAllPrice = document.createElement("li");
  checkoutTotalAll.appendChild(checkoutTotalAllPrice);
  checkoutTotalAllPrice.innerHTML = `<li>
                                        Total
                                        <span>$ ${order.totalPrice}</span>
                                        </li>`;
};
renderCheckoutProducts(data.orders[data.orders.length - 1]);
checkoutPlaceOrder.addEventListener("click", (event) => {
  window.alert("Bạn đã đặt hàng thành công");
  let order = {};
  order.products = data.orders[0].products;
  order.firstName = checkoutFirstName.value;
  order.lastName = checkoutLastName.value;
  order.address = checkoutAddress.value;
  order.phoneNumber = checkoutPhoneNumber.value;
  order.email = checkoutEmail.value;
  order.totalPrice = data.orders[0].totalPrice;
  if (checkoutPayment[0].checked) {
    order.paymentMethod = checkoutPayment[0].value;
  } else {
    order.paymentMethod = checkoutPayment[1].value;
  }
  if (checkBoxOrderNotes.checked) {
    order.orderNotes = checkoutOrderNotes.value;
  } else {
    order.orderNotes = "";
  }
  data.ordered.push(order);
  window.localStorage.setItem("data", JSON.stringify(data));
});

window.addEventListener("beforeunload", (event) => {
  data.orders = [];
  window.localStorage.setItem("data", JSON.stringify(data));
});
