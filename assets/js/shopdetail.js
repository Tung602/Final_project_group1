// =============== choose picture(shop-detail) ================
function changeImage(a) {
    document.getElementById('img').src = a;
  }
  
  // =============== choose content(shop-detail) ================
  function openParagraph(evt, p){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('shop-detail-content-paragraph-tabcontent')
    for(i=0; i<tabcontent.length; i++){
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName('shop-detail-content-paragraph-tablinks');
  
    for(i=0; i<tablinks.length; i++){
  
      tablinks[i].className = tablinks[i].className.replace(" lineRed", "");
      console.log(tablinks[i].className)
    }
    document.getElementById(p).style.display = "block";
    evt.currentTarget.className += " lineRed";
  }