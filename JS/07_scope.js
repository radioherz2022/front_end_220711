// 식별자 : 변수나 함수를 식별할 수 있는 이름.
// 스코프 : 식별자가 유효한 범위.

// 전역 스코프 : 어디서든 접근이 가능한 범위
// 전역 변수 : 가장 바깥에 선언된 변수들
let globalNum = 3;
let result = 10;

function sum(a, b) {
  return a + b;
}

function consoleGlobalNum() {
  // 지역 스코프 : 코드 블록 내의 범위
  //  지역 변수 : 지역 스코프 내에 선언된 변수들
  let innerNum = 3;
  let result = 20;
  console.log(result);
  console.log(globalNum);
}

function addGlobalNum(num) {
  globalNum = globalNum + num;
}
addGlobalNum(2); // globalNum = 5
addGlobalNum(5); // globalNum = 10
console.log(globalNum);

function outer() {
  let outerNum = 10;
  //   console.log(outerNum, innerNum); 하위 스코프의 변수 참조 불가능
  function inner() {
    let innerNum = 1;
    // let outerNum = 1; 같은 이름의 식별자 하위 스코프 부터 참조
    console.log(outerNum, innerNum);
  }
  inner();
}
outer();

// 클로저 : 상위 스코프의 변수를 하위 스코프 참조를 하면
// 상위 스코프(실행환경)가 끝나도 하위 스코프가 변수를 기억.
// 데이터의 은닉화 가능.

// 클로저 함수 예시
function getClosuer() {
  let count = 0;
  //상위 스코프를 참조하는 클로저 함수 반환
  console.log("클로저 반환");
  return function () {
    console.log("count : ", count);
    return count++;
  };
}

let closuer = getClosuer();

closuer(); // getClouser 함수가 끝났지만 getClouser함수의 변수를 계속 참조.
closuer();
closuer();
closuer();
