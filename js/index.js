const totop = document.querySelector(".to-top");
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
        totop.classList.add("active");
    } else(totop.classList.remove("active"))
});