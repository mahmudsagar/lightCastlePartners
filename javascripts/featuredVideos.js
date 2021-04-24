const body = document.querySelector("body");

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
