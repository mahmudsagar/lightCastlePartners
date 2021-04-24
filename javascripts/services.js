
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