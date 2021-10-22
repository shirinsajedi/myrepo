function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
        document.getElementById("user").style.background = "rgb(241, 76, 76)";

        return false;
    }
}