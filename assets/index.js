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

/* Intro Container Problem Handler */
window.addEventListener("load", () => {
  setTimeout(() => {
    document
      .querySelectorAll(
        ".hero-header-text, .hero-body-content, .hero-body-header-content, .hero-image-wrapper",
      )
      .forEach((element) => {
        element.classList.remove("loading");
      });
  }, 2100);
});
/* Hero Section */
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
const heroImageWrapper = document.querySelector(".hero-image-wrapper");
if (heroImageWrapper) observer.observe(heroImageWrapper);
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
/* What Section */
const whatHeaderText = document.querySelector(".what-header-text");
observer.observe(whatHeaderText);
const whatHeaderText2 = document.querySelector(".what-header-text-2");
observer.observe(whatHeaderText2);

/* Project Section */
const ProjectContainer = document.querySelector(".project-container");
observer.observe(ProjectContainer);

/* Highlight Section */
const highlightKicker = document.querySelector(".highlight-kicker");
const highlightTitle = document.querySelector(".highlight-title");
const highlightCards = document.querySelectorAll(".highlight-card");

if (highlightKicker) observer.observe(highlightKicker);
if (highlightTitle) observer.observe(highlightTitle);
highlightCards.forEach((card) => observer.observe(card));

/* Footer Section */
const footerContent = document.querySelector(".footer-content");
const footerBottom = document.querySelector(".footer-bottom");

if (footerContent) observer.observe(footerContent);
if (footerBottom) observer.observe(footerBottom);

/* Currently Learning Section */
const learningItems = document.querySelectorAll(".learning-item");
const statsEyebrows = document.querySelectorAll(".stats-eyebrow");

statsEyebrows.forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(el);
});
/* Learning Column */
learningItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.12}s`;
  const learningObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        const bar = entry.target.querySelector(".learning-bar-fill");
        if (bar) {
          setTimeout(() => {
            bar.style.width = bar.dataset.width + "%";
          }, 100);
        }
        learningObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
  learningObserver.observe(item);
});
/* Skills Column */
const skillRows = document.querySelectorAll(".skill-row");
skillRows.forEach((row, index) => {
  row.style.transitionDelay = `${index * 0.08}s`;
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  skillObserver.observe(row);
});
