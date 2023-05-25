var burgerVar = document.querySelector(".burger");
var navVar = document.querySelector(".nav");

var openNav = function () {
  console.log("openNav");
};

var openNav = function () {
  navVar.classList.toggle("is-open");
};

burgerVar.addEventListener("click", openNav);
console.log(navVar);
