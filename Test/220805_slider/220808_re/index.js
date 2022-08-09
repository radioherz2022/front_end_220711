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
let idx = 0;


nextBtn.addEventListener("click", function(){
    slideWrap.style.transform = `translateX(${idx++ * -100} vw)`;
}
);


// nextBtn.addEventListener("click", function(){
//     if(idx < slide.length -1 ){
//     idx + 1;
//     slide.style.transform = `translateX(${idx * -100} vw)`
//     }
// });


prevBtn.addEventListener("click", function(){
    if(idx > 0 ){
    idx - 1;
    slide.style.transform = `translateX(${idx * -100} vw)`
    }
});

