const slide = (container, slider, nextBtn, prevBtn, slideClassName)=>{
    let index = 1;
    let slideId
    let slides = document.querySelectorAll(`.${slideClassName}`)
    // cloninng first and last slide
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    
    firstClone.id = "first-clone";
    lastClone.id = "last-clone";
    // adding cloninng
    slider.append(firstClone);
    slider.prepend(lastClone);
    
    slides[index].classList.add("active");
    const slidesWidth = slides[index].getBoundingClientRect().width;
    
    slider.style.transform = `translateX(${-slidesWidth * index}px)`;
    const startSlide = () => {
        slideId = setInterval(() => {
            moveToNextSlide()
        }, 2000);
    };
    
    slider.addEventListener("transitionend", () => {
        slides = document.querySelectorAll(`.${slideClassName}`)
        if (slides[index].id === firstClone.id) {
            slider.style.transition = `none`;
            index = 1;
            slider.style.transform = `translateX(${-slidesWidth * index}px)`;
        }
        if (slides[index].id === lastClone.id) {
            slider.style.transition = `none`;
            index = slides.length-2;
            slider.style.transform = `translateX(${-slidesWidth * index}px)`;
        }
    });
    
    const moveToNextSlide= ()=>{
        slides = document.querySelectorAll(`.${slideClassName}`)
        if(index>= slides.length-1) return
        slides.forEach((item)=>{
            item.classList.remove('active')
        })
        index++;
        slider.style.transform = `translateX(${-slidesWidth * index}px)`;
        slider.style.transition = `.7s`;
        slides[index].classList.add("active");
    }
    
    const moveToPrevSlide= ()=>{
        if(index<=0) return
        slides = document.querySelectorAll(`.${slideClassName}`)
        if(index>= clientSlides.length-1) return
        clientSlides.forEach((item)=>{
            item.classList.remove('active')
        })
        index--;
        slider.style.transform = `translateX(${-slidesWidth * index}px)`;
        slider.style.transition = `.7s`;
        slides[index].classList.add("active");
    }
    
    container.addEventListener('mouseenter',()=>{
        clearInterval(slideId)
    })
    
    container.addEventListener('mouseleave',startSlide)
    
    nextBtn.addEventListener('click', moveToNextSlide)
    prevBtn.addEventListener('click', moveToPrevSlide)

    startSlide()
}