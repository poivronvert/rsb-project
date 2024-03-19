const coll = document.getElementsByClassName("title");
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

const nav = document.getElementsByClassName("nav-btn");
for (i = 0; i < nav.length; i++) {
    nav[i].setAttribute("order", i);
    nav[i].addEventListener("click", function(){
        let _order = this.getAttribute("order")
        var content = coll[_order].nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
function hide(){
var divsToHide = document.getElementsByClassName("content"); 
for(var i = 0; i < divsToHide.length; i++){
    divsToHide[i].style.display = "none";
}
}