var filterizr = $(".workContainer").filterizr({
  controlsSelector: ".workItem",
  gridItemsSelector: ".workCard",
  animationDuration: 0.1,
});

var elems = document.querySelectorAll(".workItem");

function myFunction() {
  let elems = document.querySelector(".activeWork");
  if (elems !== null) {
    elems.classList.remove("activeWork");
  }
}
elems.forEach((item) => item.addEventListener("click", myFunction));

var test = document.querySelectorAll(".workItem");
function activeLink() {
  test.forEach((item) => item.classList.remove("activeWork"));
  this.classList.add("activeWork");
}
test.forEach((item) => item.addEventListener("click", activeLink));

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("activeReveal");
    }
  }
}

const chk = document.getElementById("chk");
const social = document.querySelector(".all");

chk.addEventListener("change", () => {
  if (social.classList.contains("dark")) {
    social.classList.remove("dark");
    //localStorage.setItem("theme", "light");
  } else {
    social.classList.add("dark");
    //localStorage.setItem("theme", "dark");
  }
});

const open1 = document.getElementById("open");
const modalContainer = document.getElementById("modalContainer");
const close1 = document.getElementById("close");
const close2 = document.getElementById("close2");
const close4 = document.getElementById("close4");
open1.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

close1.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

close2.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

close4.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
