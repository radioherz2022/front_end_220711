
let btnSide = document.querySelector(".menuIcon");
let gnbList = document.querySelector(".gnbList");
btnSide.addEventListener("click", function () {
  gnbList.classList.add("on");
});
gnbList.addEventListener("click", function (event) {
  if (event.target === event.currentTarget) {
    gnbList.classList.remove("on");
  }
});