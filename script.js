

let lastScrollTop = 0;
let navbar = document.querySelector(".navigation");
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("icon");
  } else {
    navbar.classList.remove("icon");
  }
  lastScrollTop = scrollTop;
})