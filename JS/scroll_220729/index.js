// scroll : 스크롤바가 움직이는 이벤트
// wheel : 마우스 휠 조작 => 스크롤
// document, window, body => wheel이벤트의 passive : true
// => passive를 false로 바꿔야 e.preventDefault() 가능

let container = document.querySelector(".container");
let sectionList = document.querySelectorAll("section");
// 스크롤 중인지에 대한 값

let index = Math.round(scrollY / innerHeight);
let isScrolling = false; // setTimeout과 함께

container.addEventListener("wheel", function (e) {
  e.preventDefault();
  // deltaY => 휠을 내릴 때 100, 올릴 때 -100 => 올라가기 내려가기
  // if (isScrolling) return;
  // isScrolling = true;
  // setTimeout(function () {
  //   isScrolling = false;
  // }, 1000);

  console.log(e.deltaY);
  console.log(e.offsetY);
  if (e.deltaY > 0) {
    // 첫 섹션에서 값이 감소하지 않게
    index < sectionList.length - 1 ? index++ : false;
  } else {
    // 마지막 섹션에서 더 이상 값이 증가 하지 않게
    index > 0 ? index-- : false;
  }

  // window.scrollTo:scroll위치를 지정한 값으로 이동(절대좌표)
  // window.innerHeight : 창의 높이
  window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
});

let btnList = document.querySelectorAll(".btns .btnSec");
btnSec.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    index = idx;
    move();
  });
});

function move() {
  window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
  btnList.forEach((btn, idx) => {
    index === idx
      ? btn.classList.add("active")
      : btn.classList.remove("active");
  });
}

window.addEventListener("scroll", function () {
  isScrolling = this.scrollY !== this.innerHeight * index;
});
