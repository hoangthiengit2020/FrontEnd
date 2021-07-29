let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let loginBtn = document.querySelector("#login-btn");
let formContainer = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menuBar = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menuBar.classList.remove("fa-times");
  navBar.classList.remove("active");
};

loginBtn.addEventListener("click", () => {
  formContainer.classList.add("active");
});
formClose.addEventListener("click", () => {
  formContainer.classList.remove("active");
});

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

videoBtn.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

// for (var i = 0; i < videoBtn.length; i++) {
//   console.log(i);
//   videoBtn[i].addEventListener("click", () => {
//     document.querySelector(".controls .active").classList.remove("active");
//     btn.classList.add("active");
//     src = btn.getAttribute("data-src");
//     document.querySelector("#video-slider").src = src;
//   });
//   // console.log(videoBtn[i]);
// }
