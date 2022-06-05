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

const password = document.getElementById('passwordReg')
const passwordConfirm = document.getElementById('passwordConfirm')
const regForm = document.getElementById('reg-form')
const error = document.getElementById('error')

regForm.addEventListener('submit', (e) => {
    if(password.value !== passwordConfirm.value) {
        e.preventDefault()
        error.style.display = "block";
    }
})


