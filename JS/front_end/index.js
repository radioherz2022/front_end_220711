let btnSide = document.querySelector(".btnSide");
let gnb = document.querySelector("#gnb");
btnSide.addEventListener("click", function () {
  gnb.classList.add("on");
});
gnb.addEventListener("click", function (e) {
  if (e.target === gnb) gnb.classList.remove("on");
});

// html에 슬라이더 몇개가 작성되던 슬라이드 추가시 버튼도 추가되는 형태 만들기

let slideWrapper = document.querySelector(".slideContainer ul");
let slideList = document.querySelectorAll(".slideContainer .slide")
let pagination = document.querySelector(".pagination");
// 늘어난 슬라이드 너비를 화면에 딱 맞게 맞춰줌
slideWrapper.style.width = 100 * slideList.length + "vw";

let buttonStr = "";

slideList.forEach(function(_, idx){
  // innerHTML 할당 전에 문자열로 저장
  buttonStr += `<button>${idx + 1}</button>`;
});

// 길게 나열된 문자열을 innerHTML에 한번만 할당
pagination.innerHTML = buttonStr;

// 슬라이드 동작하게 하는 JS

let btnSlideList = document.querySelectorAll(".pagination button");

btnSlideList.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    slideWrapper.style.transform = `translate(${-100 * i}vw)`;
});
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
});
