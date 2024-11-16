let header = document.querySelector("header");
header.classList.add("scroll");
window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight) {
    header.classList.remove("scroll");
  } else {
    header.classList.add("scroll");
  }
});
