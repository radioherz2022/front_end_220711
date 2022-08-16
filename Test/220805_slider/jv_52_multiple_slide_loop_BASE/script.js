var slides = document.querySelector(".slides");
var slide = document.querySelectorAll(".slides li");
var currentIndex = 0; // 지금 보고 있는 인덱스 번호
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
    setTimeoust(() => {
        slides.classList.add('animated');
        // css에 slides.animated의 트랜지션 기능을 추가하기
    }, 100);


}

function updateWidth(){
    var currentSlides = document.querySelectorAll(".slides li");
    var newSlideCount = currentSlides.length;

    var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}

// 초기위치를 잡는 함수 만들기
function setInitialPos(){
    var initialTranslateValue = -(slideWidth + slideMargin)*newSlideCount;
    slides.style.transform = "translateX(" + initialTranslateValue + "px)";
}

nextBtn.addEventListener('click', function(){
    moveSlide(currentIndex + 1);
})

prevBtn.addEventListener('click', function(){
    moveSlide(currentIndex - 1);
})

function moveSlide(num){
slide.style.left = -num * (slideWidth + slideMargin) + 'px';
currentIndex = num;
}