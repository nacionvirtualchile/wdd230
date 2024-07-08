const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const message = document.querySelector("#message");


pass2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pass1.value !== pass2.value) {
        message.textContent = "Passwords not match!";
        message.style.visibility = "show";
        pass1.style.backgroundColor = "#fff0f3";
        pass2.style.backgroundColor = "#fff0f3";
        message.style.backgroundColor = "red";
        pass1.value = "";
        pass2.value = "";
        pass1.focus();
    } else {
        message.style.display = "none";
        pass1.style.backgroundColor = "rgb(187, 255, 187)";
        pass2.style.backgroundColor = "rgb(187, 255, 187)";
        message.style.backgroundColor = "white";
        pass1.style.color = "#000";
        pass2.style.color = "#000";
    }
}



const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}