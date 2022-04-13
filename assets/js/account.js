let logInEmail = document.querySelector("#logInEmail");
let logInPassword = document.querySelector("#logInPassword");
let logInBtn = document.querySelector(".log-in-btn");
logInBtn.addEventListener("click", (event) => {
  let user = data.users.find(
    (e) => e.username === logInEmail.value && e.password === logInPassword.value
  );
  if (user) {
    data.isUserLogIn = user.id;
    window.localStorage.setItem("data", JSON.stringify(data));
    document.querySelector("#logInCheck").innerHTML = "";
  } else {
    event.preventDefault();
    document.querySelector("#logInCheck").innerHTML =
      "Username or password incorrect";
  }
});

// ============== Sign Up ===============

let signUpFirstName = document.querySelector("#signUpFirstName");
let signUpLastName = document.querySelector("#signUpLastName");
let signUpEmail = document.querySelector("#signUpEmail");
let signUpPhoneNumber = document.querySelector("#signUpPhoneNumber");
let signUpPassword = document.querySelector("#signUpPassword");
let signUpTerm = document.querySelector("#signUpTerm");
let signUpBtn = document.querySelector("#signUpBtn");
signUpBtn.addEventListener("click", (event) => {
  let user = {
    id: data.users.length + 1,
    username: signUpEmail.value,
    password: signUpPassword.value,
    firstName: signUpFirstName.value,
    lastName: signUpLastName.value,
    phoneNumber: signUpPhoneNumber.value,
    avatar: "./assets/img/user-preview.jpeg",
  };
  data.users.push(user);
  data.isUserLogIn = data.users.length;
  window.localStorage.setItem("data", JSON.stringify(data));
});
