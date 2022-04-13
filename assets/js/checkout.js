let checkoutProductsContainer = document.querySelector(
  ".checkout-total-product"
);
let checkoutPlaceOrder = document.querySelector(".place-order-btn");
let checkoutAddress = document.querySelector(".checkout-input-address");
let checkBoxOrderNotes = document.querySelector(".checkbox-order-notes");
let checkoutOrderNotes = document.querySelector(".checkout-input-ordernotes");
let checkoutTotalAll = document.querySelector(".checkout-total-all");
let checkoutPayment = document.querySelectorAll(".checkout-payment-method");
let renderCheckoutProducts = function (order) {
  order.products.forEach((product) => {
    let checkoutProductItem = document.createElement("li");
    let colorVariant = product.color ? ` | Color: ${product.color}` : ``;
    checkoutProductsContainer.appendChild(checkoutProductItem);
    checkoutProductItem.innerHTML = `${product.name}</br>Quantity: ${product.quantity} | Size: ${product.size} ${colorVariant}
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
  let user = data.users.find(e => e.id === data.isUserLogIn);
  alert("Bạn đã đặt hàng thành công", "success");
  let order = {};
  const today = new Date();
  order.products = data.orders[0].products;
  order.name = `${user.firstName} ${user.lastName}`
  order.address = checkoutAddress.value;
  order.phoneNumber = user.phoneNumber;
  order.email = user.email;
  order.totalPrice = data.orders[0].totalPrice;
  order.date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
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
  data.orders = [];
  data.cart = [];
  window.localStorage.setItem("data", JSON.stringify(data));
});
