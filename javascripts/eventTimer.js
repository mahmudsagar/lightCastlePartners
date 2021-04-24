const currentDate = new Date();
const currentyear = currentDate.getFullYear();

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
