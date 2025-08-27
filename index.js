const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");
const links = document.querySelectorAll("#navlinks a");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("active"); // <-- toggles menu
});

// close menu after clicking a link
links.forEach(link => {
  link.addEventListener("click", () => {
    navlinks.classList.remove("active");
  });
});
