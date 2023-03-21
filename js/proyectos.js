function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }

function myFunction2(imgs) {
    var expandImg = document.getElementById("expandedImg2");
    var imgText = document.getElementById("imgtext2");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

function myFunction3(imgs) {
    var expandImg = document.getElementById("expandedImg3");
    var imgText = document.getElementById("imgtext3");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}