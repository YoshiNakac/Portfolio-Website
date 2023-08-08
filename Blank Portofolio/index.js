// Toggle Icon Navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

menuIcon.addEventListener = () => {
  menuIcon.classList.toggle("bx-x");
};
// Scroll Section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(`header nav a[href="#${id}"]`).classList.add("active");
      });
      // Active Sections for Animation on Scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // Sticky Header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove Toggle Icon and Navbar when Navbar links (scroll) clicked

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
