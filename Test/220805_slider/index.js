
let btnSide = document.querySelector(".navBox .menuIcon");
let gnbList = document.querySelector("#gnbList");


btnSide.addEventListener("click", function () {
  gnbList.classList.add("on");
});

window.addEventListener("resize", function () {
  if (this.innerWidth > 768) {
    gnbList.classList.remove("on");
  }
});


let slideContainer = document.querySelector(".slideContainer");
let slideWrapper = document.querySelector(".slideContainer ul");
let slideImg = document.querySelector(".slide")
let slideBtn = document.querySelector(".btnBox")
let slideLeft = document.querySelector(".slideLeft")
let slideRight = document.querySelector(".slideRight")


slideRight.addEventListener("click", function () {
  slideWrapper.style.transform = `translateX(${-100 }vw)`;
});

slideLeft.addEventListener("click", function () {
  slideWrapper.style.transform = `translate(${0}vw)`;
});




// 모달창 클릭해서 보여주기

let modalBg = document.querySelector(".modalBg");
let modal = modalBg.querySelector(".modal");
let btnClose = modalBg.querySelector(".btnClose");
let liConnect = document.querySelector("#gnbList ul li")

btnClose.addEventListener("click", function () {
  modalBg.classList.add("hide");
});


liConnect.addEventListener("click", function(){
  modalBg.classList.remove("hide");
})


