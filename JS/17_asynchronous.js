// 스케쥴링 : 일정시간 후 특성 함수를 실행할 수 있는 스케쥴을 관리한다.
// => JS 자체는 동기적인 언어이다. 브라우저가 스케줄링을 도와준다.

// 1.setTimeout(콜백함수, 시간(ms))
// 첫번째 인자의 콜백함수를 두번째 인자의 시간이 지난 후에 실행하는 스케줄을 추가
// => setTimeout의 실행결과로 Timeout 반환 => 스케줄 취소할 때 사용
// => 시간을 0으로 지정해도 최소 4ms 이후에 실행
let timeout = setTimeout(function () {
  console.log("실행");
  console.log(timeout);
}, 3000);

// clearTimeout(타임아웃 id)
// setTimeout의 실행결과로 받은 Timeout Id를 입력하면 해당 스케줄이 취소된다.
clearTimeout(timeout);

// 2. setInterval(콜백함수, 시간ms)
// 첫번째 인자의 콜백함수를 두번째 인자의 시간(ms)마다 반복 실행을 한다.(스케줄반복)

let intervalId = setInterval(function () {
  console.log("2초 경과");
}, 2000);

// clearInterval(인터벌Id)
// setInterval의 실행결과로 받은 IntervalId 인자로 전달하면 해당 스케줄이 취소된다.
setTimeout(function () {
  // 10초 뒤 스케줄 취소
  clearInterval(intervalId);
}, 10000);

// 동기 : 실행결과를 기다렸다가 다음 코드를 실행
// => 코드를 순차적으로 실행
console.log("동기 처리는 이렇게");
console.log("순차적으로 실행이 됩니다.");

// 비동기 : 실행결과를 기다리지 않고 바로 다음 코드를 실행
// 비동기 처리 - 콜백함수
// 비동기 코드 안에서 원하는
/////////////////// 공부하기
let data;
setTimeout(function () {
  data = 1;
  useCallback(getData, data);
}, 3000);

function useCallback(callback, data) {
  callback(data);
}

function getData(data) {
  console.log(data);
}

// Promise ; Promise 객체를 반환
// 첫번째 인자로 콜백함수(성공(resolve)했을 때, 실패(reject)했을 때)
// => resolve(값)가 되면 then(콜백함수(값))
// => reject(에러)가 되면 catch(콜백함수(에러)가 실행)
// => resolve 혹은 reject
let count = 10;
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    count++;
    if (count < 10) {
      resolve(count);
    } else {
      reject("숫자가 goss입니다");
    }
    resolve(count);
    reject(new Error());
  }, 3000);
});

promise
  .then(function (res) {
    console.log("성공");
    console.log(res);
  })
  .catch(function (error) {
    console.log("에러발생!");
    console.log(error);
  });

function increase(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = num + 1;
      if (result > 10) {
        reject(new Error("숫자가 큽니다"));
      }
      console.log("resolve:", result);
      resolve(result);
    }, 1000);
  });
}

increase(1).then(function (num) {
  return increase(num);
});

let getMovie = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("범죄도시2");
    reject("영화가 없습니다.");
  }, 3000);
});

getMovie
  .then(function (res) {
    console.log(res);
  })
  .then(function (error) {
    console.log(error);
  });

function decrease(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = num - 1;
      if (num === 0) {
        reject(new Error("0입니다!"));
      }
      console.log("decrease:", result);
      resolve(result);
    }, 1000);
  });
}
decrease(5)
  .then(function (res) {
    return decrease(res);
  })
  .catch(function (error) {
    console.log(error);
  });

// song.then 찍어서 콘솔창에 출력

let song = new Promise((resolve, reject){
    resolve("sneakers");
    reject("error");
  });

song
.then(function(res){
  console.log(res);
});
.catch(function(error){
  console.log(error);
});

// asynch, await

function getSong(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve("Sneakers");
    },3000);
  });
}
// async
// 함수 앞에 async 키워드를 함께 선언
// async 안에서 await 키워드를 사용하면 Promise가 끝날 때까지 기다려준다.

asynch function printSong(){
  let result=await getSong();
  console.log("노래:",result);
}

printSong();