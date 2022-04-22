//constants

const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector("#mobile-menu");

//toggle mobile menu function

function menuDisplayToggle() {
    var m = document.getElementById("mobile-menu");
    if (m.style.display == "block") {
        m.style.display = "none";
    }
    else {
        m.style.display = "block";
    }
}

//when hamburger is clicked toggle on/off mobile menu

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menuDisplayToggle();
});