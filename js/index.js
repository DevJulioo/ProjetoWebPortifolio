const nav = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    nav.classList.add("scrolling");
  } else {
    nav.classList.remove("scrolling");
  }
});
