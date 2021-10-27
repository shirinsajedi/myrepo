function showHide() {
    var toggle = document.querySelector(".sub");
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        toggle.classList.add("hide");
    } else {
        x.type = "password";
        toggle.classList.remove("hide");
    }
}