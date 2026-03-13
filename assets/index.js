const dropdownMenu = document.querySelector(".dropdown-menu-child");
const dropdownBar = document.querySelector(".dropdown-bar");
const dropdownCross = document.querySelector(".dropdown-icon");
function showMenu() {
  dropdownMenu.classList.add("active");
}
function removeMenu() {
  dropdownMenu.classList.remove("active");
}
dropdownBar.addEventListener("click", () => {
  showMenu();
});
dropdownCross.addEventListener("click", () => {
  removeMenu();
});
const dropdownLink = document.querySelectorAll(".dropdown-link");
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
dropdownLink.forEach((link) => {
  observer.observe(link);
});

const heroHeaderText = document.querySelectorAll(".hero-header-text");
const heroBodyContent = document.querySelector(".hero-body-content");
const heroBodyHeader = document.querySelectorAll(".hero-body-header-content");
heroHeaderText.forEach((text) => {
  observer.observe(text);
});
observer.observe(heroBodyContent);
/* observer.observe(heroBodyHeader); */
heroBodyHeader.forEach((header) => {
  observer.observe(header);
});

/* Header */
const headerParent = document.querySelector(".header-parent");
observer.observe(headerParent);

/* About Section */
const aboutHeader = document.querySelector(".about-header");
const aboutBody = document.querySelector(".about-body-text");
const aboutFooter = document.querySelector(".about-footer-content");
observer.observe(aboutHeader);
observer.observe(aboutBody);
observer.observe(aboutFooter);

/* Where Section */
const whereText = document.querySelectorAll(".where-text");
whereText.forEach((text) => {
  observer.observe(text);
});

const whatHeaderText = document.querySelector(".what-header-text");
observer.observe(whatHeaderText);
const whatHeaderText2 = document.querySelector(".what-header-text-2");
observer.observe(whatHeaderText2);
