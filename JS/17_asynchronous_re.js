// 서버 데이터 요청, 이미지 로드 => 얼마나 걸릴지 모를 작업
// => 일단 요청해놓고 결과를 기다리지 않고 다음 코드 실행

let count = 5;
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    count++;
    if (count < 10) {
      resolve(count);
    } else {
      reject("숫자가 너무 큽니다");
    }
  }, 3000);
});
