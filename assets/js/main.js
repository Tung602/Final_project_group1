var navbarBtn = document.getElementById("navbar-toggler");
var navbar = document.getElementById("navbar");
var modal = document.getElementById("modal");
navbarBtn.onclick = () => {
    navbar.classList.add("show-navbar");
    modal.classList.add("show-modal");
};
modal.onclick = () => {
    navbar.classList.remove("show-navbar");
    modal.classList.remove("show-modal");
}