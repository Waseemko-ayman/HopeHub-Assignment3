let navBar = document.getElementById("links");
let menuIcon = document.getElementById("menu");
let closeIcon = document.getElementById("close");

menuIcon.addEventListener("click", () => {
  navBar.classList.add("right");
});

closeIcon.addEventListener("click", () => {
  navBar.classList.remove("right");
});