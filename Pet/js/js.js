// $(document).ready(function () {
//   $("#search-icon").click(() => {
//     $(this).toggleClass("fa-times");
//     $("#search-box").toggleClass("active");
//   });
//   //   $("#menu").click(() => {
//   //     $(this).toggleClass("fa-times");
//   //     console.log("hello");
//   //     $(".navbar").toggleClass("nav-toggle");
//   //   });
//   $("#menu").click(function () {
//     $(this).toggleClass("fa-times");
//     $(".navbar").toggleClass("nav-toggle");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var searchIcon = document.querySelector("#search-icon");
  var searchBar = document.querySelector("#search-box");
  var menu = document.querySelector("#menu");
  var navBar = document.querySelector(".navbar");
  searchIcon.addEventListener("click", () => {
    searchIcon.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
  });
  menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("nav-toggle");
  });

  //scroll hide menu
  window.addEventListener("scroll", function () {
    menu.classList.remove("fa-times");
    navBar.classList.remove("nav-toggle");
    searchIcon.classList.remove("fa-times");
    searchBar.classList.remove("active");

    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY == 0) {
      header.classList.remove("sticky");
    }
  });
});
