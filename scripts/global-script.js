const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".main-nav");

const toggleMenu = () => {
  const styles = window.getComputedStyle(nav);
  if (styles.display === "block") {
    nav.style.display = "none";
    return;
  }
  nav.style.display = "block";
};

hamburger.addEventListener("click", toggleMenu);
