var slides = document.querySelector(".slides");
var slide = document.querySelectorAll(".slides li");
var currentIndex = 0;
var slideCount = slide.length;
var slideWidth = 200;
var slideMargin = 30;
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

makeClone();

function makeClone(){
    for(var i = 0; i < slideCount; i++){
        var cloneSlide =slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for(var i = slideCount-1; i>=0 ; i--){
        var cloneSlide =slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
}

function updateWidth(){
    var currentSlides = document.querySelectorAll(".slides li");
    var newSlideCount = currentSlides.length;

    var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}

function setInitialPos(){
    
}