function toggleMenu(button) {
  button.classList.toggle("open");
  const nav = document.querySelector(".header nav");
  if (nav) {
    nav.classList.toggle("hide");
  }
}
