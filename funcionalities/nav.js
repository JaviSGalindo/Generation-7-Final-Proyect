document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".navBar");
  const barSections = document.querySelector(".barSections");

  if (hamburger && navBar) {
    hamburger.addEventListener("click", () => {
      navBar.classList.toggle("open");
      barSections.style.display = navBar.classList.contains("open")
        ? "flex"
        : "none";
    });
  }
});
