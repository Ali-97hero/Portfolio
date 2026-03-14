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

const contactHeader = document.querySelector(".contact-me-header");
const contactKicker = document.querySelector(".contact-me-kicker");
if (contactKicker) observer.observe(contactKicker);
const contactSubCopy = document.querySelector(".contact-me-subcopy");
if (contactSubCopy) observer.observe(contactSubCopy);
const contactForm = document.querySelector(".contact-form");

if (contactHeader) observer.observe(contactHeader);
if (contactForm) observer.observe(contactForm);

const contactDivider = document.querySelector(".contact-me-divider");
if (contactDivider) observer.observe(contactDivider);

const footerContent = document.querySelector(".footer-content");
const footerBottom = document.querySelector(".footer-bottom");

if (footerContent) observer.observe(footerContent);
if (footerBottom) observer.observe(footerBottom);
