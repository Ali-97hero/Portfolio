const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  },
);
const navbarLink = document.querySelector(".navbar-link");
observer.observe(navbarLink);
const navbarLogo = document.querySelector(".navbar-logo");
observer.observe(navbarLogo);
const blogHeader = document.querySelector(".blog-header");
observer.observe(blogHeader);

const blogContainers = document.querySelectorAll(".blog-container");
blogContainers.forEach((container) => {
  observer.observe(container);
});

const footerContent = document.querySelector(".footer-content");
const footerBottom = document.querySelector(".footer-bottom");

if (footerContent) observer.observe(footerContent);
if (footerBottom) observer.observe(footerBottom);
