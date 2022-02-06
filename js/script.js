const images = document.querySelectorAll('.slider .slider-line img'),
      sliderLine = document.querySelector('.slider-line');

let btnNext = document.querySelector('.btn-next'),
    btnPrev = document.querySelector('.btn-prev');

let count = 0;
let width;

init();

function init() {
    let slider = document.querySelector('.slider');
    width = slider.offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });

    rollSlider();   
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-'+count*width +'px)';
}

window.addEventListener('resize', () => {
    init();
});

btnNext.addEventListener('click', () => {
    count++;
    if (count >= images.length) {
        count = 0;
    }

    rollSlider();
});

btnPrev.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = images.length-1;
    }

    rollSlider();
});

