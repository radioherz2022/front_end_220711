let btnSide = document.querySelector(".btnSide");
let gnb = document.querySelector("#gnb");
btnSide.addEventListener("click", function () {
  gnb.classList.add("on");
});
gnb.addEventListener("click", function (e) {
  if (e.target === gnb) gnb.classList.remove("on");
});

let btnSlideList = document.querySelectorAll(".pagination button");
let slideWrapper = document.querySelector(".slideContainer ul");

// btnSlideList[0].addEventListener("click", function () {
//  slideWrapper.style.transform = "translate(0vw)";
// });
// btnSlideList[1].addEventListener("click", function () {
//   slideWrapper.style.transform = "translate(-100vw)";
// });
// btnSlideList[2].addEventListener("click", function () {
//   slideWrapper.style.transform = "translate(-200vw)";
// });

// for (let i = 0; i < btnSlideList.length; i++) {
//  btnSlideList[i].addEventListener("click", function () {
    // slideWrapper.style.transform = "translate(" + -100 * i +"vw)";
    // 인덱스에 따라 translate 값 계산
//    slideWrapper.style.transform = `translate(${-100 * i}vw)`; // 템플릿 리터럴
//  });
// }


btnSlideList.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    slideWrapper.style.transform = `translate(${-100 * i}vw)`;
});

// 슬라이드 다시공부해요

let modalBg = document.querySelector(".modalBg");
let modal = modalBg.querySelector(".modal");
let btnClose = document.querySelector(".btnClose");
btnClose.addEventListener("click", function () {
  modalBg.classList.add("hide");
});

// 창의 크기가 조절될 때 실행
window.addEventListener("resize", function () {
  if (this.innerWidth > 768) {
    gnb.classList.remove("on");
  }
};
