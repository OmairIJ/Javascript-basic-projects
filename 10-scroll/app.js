// ********** close links ************
const toggleBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight == 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const navbar = document.querySelector("#nav");
window.addEventListener("scroll", function () {
    const navHeight = navbar.getBoundingClientRect().height;  
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
    } else {
    navbar.classList.remove("fixed-nav");
    }
    const topLink = document.querySelector(".top-link");
    if (scrollHeight > 500) {
    topLink.classList.add("show-link");
    } else {
    topLink.classList.remove("show-link");
    }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = link.getAttribute("href");
    const element = document.querySelector(`${id}`);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const navHeight = navbar.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    const fixedNav = navbar.classList.contains("fixed-nav");
    if (!fixedNav) {
        position = position - navHeight;
    }
    if (navHeight > 82) {
        position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
