const body = document.querySelector("body");
const currentDate = new Date();
const currentyear = currentDate.getFullYear();

//count up
var aboutElement = document.querySelector(".aboutLCPartners");
var aboutElementHeight = aboutElement.clientHeight;

const inView = () => {
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollPosition = scrollY + windowHeight;
    var elementPosition =
        aboutElement.getBoundingClientRect().top + scrollY + aboutElementHeight;
    if (scrollPosition > elementPosition) {
        return true;
    }

    return false;
};

function animateValue(item, start, end, duration) {
    if (inView()) {
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
    }
}
window.addEventListener('scroll', ()=>{
    
    const count = document.querySelectorAll(".stat-count");
    count.forEach((item) => {
        const value = item.innerHTML;
        animateValue(item, 0, value, 5000);
    });
    
})
//featured video

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

// auto generate copyright year
const copyrightYear = document.querySelector(".copyright-year");
copyrightYear.innerHTML = currentyear;
