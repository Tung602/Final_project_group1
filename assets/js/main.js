// ============ Header ================

// Menu aside
let navbarToggler = document.querySelector(".navbar-toggler");
let menuAside = document.querySelector(".menu-wrapper");
let modal = document.querySelector(".modal");
navbarToggler.onclick = () => {
    menuAside.classList.add("show-menu-aside");
    modal.classList.add("show-modal");
}
modal.onclick = () => {
    menuAside.classList.remove("show-menu-aside");
    modal.classList.remove("show-modal");
}