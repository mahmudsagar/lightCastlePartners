// mobile sidenav

const navToggle = document.querySelector(".nav__menu-btn");
const linksContainer = document.querySelector(".sidenav");
const close = document.querySelector(".sidenav__close");
navToggle.addEventListener("click", () => {
    linksContainer.classList.toggle("show-sidenav");
});
close.addEventListener("click", () => {
    linksContainer.classList.remove("show-sidenav");
});

// show search form

const searchBtn = document.querySelector(".nav__search-container");
const closeSearchBox = document.querySelector(".search_close");
const searchBox = document.querySelector(".search-form");
const searchBoxInput = document.querySelector(".search-form input");
const searchResult = document.querySelector(".search-result");
searchBtn.addEventListener("click", () => {
    searchBox.classList.add("show-search-form");
});
closeSearchBox.addEventListener("click", () => {
    searchBox.classList.remove("show-search-form");
    searchResult.style.display = "none";
});
searchBoxInput.addEventListener("input", () => {
    searchResult.style.display = "grid";
});
// search result container

// fixed nav bar
const navbar = document.getElementById("nav");
const contact = document.querySelector(".contact");
const navHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navbar.classList.remove("container");
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
        navbar.classList.add("container");
    }
    if (screen.width <= 425) {
        navbar.classList.remove("container");
        navbar.classList.add("fixed-nav");
        contact.style.display = "none";
    }
});

window.addEventListener("load", () => {
    if (screen.width <= 425) {
        navbar.classList.remove("container");
        navbar.classList.add("fixed-nav");
        contact.style.display = "none";
    }
});
// smooth scrolling
const heroLinksContainer = document.querySelector(".sidenav");

// select links
const scrollLinks = document.querySelectorAll(".hero__page-map-btn");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

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
    // close
    linksContainer.style.height = 0;
  });
});