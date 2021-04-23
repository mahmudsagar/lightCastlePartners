const body = document.querySelector("body");
const currentDate = new Date();
const currentyear = currentDate.getFullYear();

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
console.log(searchBoxInput);
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

// count up start
const count = document.querySelectorAll(".stat-count");
const countUp = (item, start, end, duration) => {
    if (start == end) return;
    const range = end - start;
    let current = start;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(function () {
        current++;
        item.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
};
count.forEach((item) => {
    const value = item.innerHTML;
    countUp(item, 0, value, 10000);
});

// count up ends

// services section starts
// tabs functionality
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".services__container");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        articles.forEach((article) => {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

// services section ends

// video section start
const video = document.querySelectorAll(".video");
const videoBtn = document.querySelectorAll(".image-overlay");
const videoCloseBtn = document.querySelectorAll(".video-close");
// opening function
const openVideo = (video) => {
    video.classList.add("open-video");
    body.classList.add("noscroll");
};

// clossing function
const closeVideo = (video) => {
    video.classList.remove("open-video");
    body.classList.remove("noscroll");
};

// open video overlay
videoBtn.forEach((item) => {
    item.addEventListener("click", () => {
        const video = item.parentElement.parentElement.querySelector(".video");
        openVideo(video);
    });
});

// close video overlay
videoCloseBtn.forEach((item) => {
    item.addEventListener("click", () => {
        const video = item.closest(".video");
        closeVideo(video);
    });
});

// close video overlay
video.forEach((item) => {
    item.addEventListener("click", () => {
        closeVideo(item);
    });
});
// vidoe section ends

// countdown start
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const deadline = document.querySelector(".countdown__timer");
const items = document.querySelectorAll(".countdown__timer-body h4");

let tempYear = currentDate.getFullYear();
let tempMonth = currentDate.getMonth();
let tempDay = currentDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 6, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

const futureTime = futureDate.getTime();

function getRemaindingTime() {
    const today = new Date().getTime();

    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();

// countdown ends

// auto generate copyright year
const copyrightYear = document.querySelector(".copyright-year");
copyrightYear.innerHTML = currentyear;
