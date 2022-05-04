var elems = document.querySelectorAll(".item-nav ");

function myFunction(e) {
  var elems = document.querySelector(".active");
  if (elems !== null) {
    elems.classList.remove('active');
  }
}
elems.forEach((item) =>
  item.addEventListener('click', myFunction));

var test = document.querySelectorAll('.item-nav');

function activeLink() {
  test.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}
test.forEach((item) =>
  item.addEventListener('click', activeLink));

  

