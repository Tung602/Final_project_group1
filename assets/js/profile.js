let user = data.users.find((e) => e.id === data.isUserLogIn);
let inputFirstName = document.querySelector("#inputFirstName");
let inputLastName = document.querySelector("#inputLastName");
let inputEmail = document.querySelector("#inputEmail");
let inputPhoneNumber = document.querySelector("#inputPhoneNumber");
let userAvatar = document.querySelector("#userAvatar");
let userAvatarInput = document.querySelector("#userAvatarInput");
let userSaveBtn = document.querySelector(".profile-save-change");
let userOldPassword = document.querySelector("#inputOldPassword");
let userNewPassword = document.querySelector("#inputNewPassword");
let userConfirmNewPassword = document.querySelector("#inputConfirmNewPassword");
let changePasswordBtn = document.querySelector(".change-password-btn");
userAvatarInput.addEventListener("change", (event) => {
  let image = userAvatarInput.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    userAvatar.setAttribute("src", this.result);
    user.avatar;
    user.avatar = this.result;
  });
  reader.readAsDataURL(image);
});
userOldPassword.addEventListener("focusout", (event) => {
  if (userOldPassword.value !== user.password) {
    document.querySelector("#oldPasswordCheck").innerHTML =
      "Password entered is wrong";
  } else {
    document.querySelector("#oldPasswordCheck").innerHTML = "";
  }
});
userConfirmNewPassword.addEventListener("input", (event) => {
  if (userConfirmNewPassword.value !== userNewPassword.value) {
    document.querySelector("#confirmPasswordCheck").innerHTML =
      "Password entered is different";
  } else {
    document.querySelector("#confirmPasswordCheck").innerHTML = "";
  }
});
changePasswordBtn.addEventListener("click", (event) => {
  if (
    userOldPassword.value === user.password &&
    userConfirmNewPassword.value === userNewPassword.value
  ) {
    user.password = userNewPassword.value;
    data.users[data.users.indexOf((e) => e.id === user.id)] = user;
    window.localStorage.setItem("data", JSON.stringify(data));
    document.querySelector(".close-change-password-modal").click();
  }
});
let renderUser = function () {
  inputFirstName.value = user.firstName;
  inputLastName.value = user.lastName;
  inputEmail.value = user.username;
  inputPhoneNumber.value = user.phoneNumber;
  userAvatar.src = user.avatar;
};
let updateUser = function () {
  user.firstName = inputFirstName.value;
  user.lastName = inputLastName.value;
  user.username = inputEmail.value;
  user.phoneNumber = inputPhoneNumber.value;
  data.users[data.users.indexOf((e) => e.id === user.id)] = user;
  window.localStorage.setItem("data", JSON.stringify(data));
};

let updateUserPassword = function () {};
userSaveBtn.addEventListener("click", (event) => {
  updateUser();
});
renderUser();
