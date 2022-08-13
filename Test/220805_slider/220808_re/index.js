let btnSide = document.querySelector(".btnSide");
let gnb = document.querySelector("#gnb")
btnSide.addEventListener("click", function(){
    gnb.style.display = "block";
})

let slideContainer = document.querySelector(".slideContainer")
let slideWrap = document.querySelector(".slideWrap")
let slide = document.querySelectorAll(".slide")
let prevBtn = document.querySelector(".prevBtn")
let nextBtn = document.querySelector(".nextBtn")
let index = 0;


nextBtn.addEventListener("click", function( ){
    if(index < slide.length - 1)
    slideWrap.style.transform = `translate(${index * -100} vw)`;
    index.current + 1;

}
);


prevBtn.addEventListener("click", function(){
    if(index > 0 ){
    slideWrap.style.transform = `translate(${index * -100} vw)`
    index.current - 1;
    }
});

