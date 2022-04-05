// =============== Admin ===============

let tabLinks = document.getElementsByClassName("admin-nav-btn");
let tabContent = document.getElementsByClassName("main-content");
for(let i=0;i<tabLinks.length;i++){
  tabLinks[i].onclick = () =>{
    for(let j=0;j<tabContent.length;j++){
      tabContent[j].style.display = "none";
    }
    for(let j=0;j<tabLinks.length;j++){
      tabLinks[j].classList.remove("active");
    }
    tabLinks[i].classList.add("active");
    tabContent[i].style.display = "block";
  }
}
tabLinks[0].click();