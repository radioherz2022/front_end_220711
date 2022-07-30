// scroll : 스크콜바가 움직이는 이벤트
// wheel : 마우스 휠 조작 => 스크롤
// document, window, body => wheel이벤트의 passive : true
//   => passive를 false로 바꿔야 e.preventDefault() 가능
// document.body.addEventListener(
//   "wheel",
//   function (e) {
//     console.log(e.target);
//     e.preventDefault();
//   },
//   { passive: false }
// );

let container = document.querySelector(".container");
let sectionList = document.querySelectorAll("section");

// 변수로 인덱스 저장 => 휠을 내릴때마다 변수에 변화?
// 휠을 내릴 때마다 다음 섹션 이동

let index = Math.round(scrollY / innerHeight);

// 스크롤 중인지에 대한 값
let isScrolling = false; // setTimeout과 함께
container.addEventListener("wheel", function (e) {
  e.preventDefault();
  // return을 하면 함수가 종료돼서 이후 코드가 실행이 안됨
  if (isScrolling) return;

  isScrolling = true;

  setTimeout(function () {
    isScrolling = false;
  }, 500);

  // e.deltaY => 휠을 내릴 때 양수, 올릴 때 음수 => 올라가기,내려가기
  if (e.deltaY > 0) {
    // 첫 섹션에서 값이 더 이상 감소하지 않게
    index < sectionList.length - 1 ? index++ : false;
  } else {
    // 마지막 섹션에서 더 이상 값이 증가 하지 않게
    index > 0 ? index-- : false;
  }
  // window.scrollTo : scroll 위치를 지정한 값으로 이동(절대좌표)
  // window.innerHeight : 창의 높이
  move();
});

// 버튼 클릭시 스크롤 이동
let btnList = document.querySelectorAll(".btns .btnSec");
btnList.forEach((btn, idx) => {
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
  // isScrolling = this.scrollY !== this.innerHeight * index;
  index = Math.round(scrollY / innerHeight);

  btnList.forEach((btn, idx) => {
    index === idx
      ? btn.classList.add("active")
      : btn.classList.remove("active");
  });
});

move();
