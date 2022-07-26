// 고차 함수 : 함수를 인자로 받거나 아니면 함수를 반환(return)하는 함수

// 함수를 인자로 받는 고차함수
function repeat(n, callback) {
  for (let i = 0; i < n; i++) callback();
}

//함수를 리턴하는 고차함수
function makeFunc(a, b) {
  return function () {
    console.log(a, b);
  };
}

let foo = makeFunc(1, 2);
foo();

let numArr = [1, 2, 3, 4, 5, 10];
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}

// 배열의 고차함수

// 1. forEach(): 각 요소를 인자로 전달받아 콜백 함수를 한번씩 실행(배열의 길이만큼)
//  => 콜백함수의 첫번째 인자로 배열의 각 요소, 두번째 인자로 각 요소의 인덱스값을 전달
//  => forEach(콜백함수(요소,인덱스))
numArr.forEach(function (n, i) {
  console.log(i + "번째", n);
});

let resultArr = [];
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] % 2 === 0) {
    resultArr.push(numArr[i]);
  }
}
console.log(resultArr);

// 2. filter() : 콜백함수의 실행결과가 true인 요소만 모아서 새로운 배열로 반환
let resultArr02 = numArr.filter(function (num) {
  return num % 2 === 0;
});
console.log(resultArr02);
// 화살표 함수와 같이 사용하면 가독성 극대화
//  => 화살표 함수는 코드블록 생략시 바로 return
//  => 화살표 함수는 매개변수가 하나면 () 생략 가능
let resultArr03 = numArr.filter((num) => num % 2 === 0);

// 문제1. 문자열 3개인 배열에서 글자수가 5개 이상인 문자열만 모아보세요.
//   => 문자열.length => 문자의 개수

let strArr = ["adfsdfsssa", "dfs", "dsdssdf"];

let strResult = strArr.filter((str) => str.length >= 5);
console.log(strResult);

// 나이가 30이상인 사람만 배열로 반환
let userName = [
  { name: "soek", age: 30 },
  { name: "myengsoo", age: 29 },
  { name: "minsu", age: 40 },
];

let userFind = userName.filter(function (user) {
  return user.age >= 30;
});
console.log(userFind);

// map() : 배열안의 요소들을 가공 => return된 값들을 모아서 새로운 배열
let numArr02 = [4, 6, 7, 10];
let doubleNumArr = numArr02.map(function (num) {
  return num * 2;
});
// 화살표 함수 활용
let divideNumArr = numArr02.map((num) => num / 2);
console.log(doubleNumArr);
console.log(divideNumArr);

// userArr user의 이름만 모아서 배열로 만들기

let userName02 = userName.map((user) => user.name);
console.log(userName02);

// 심화문제 userArr에서 age 30 이상인 사람의 이름만 배열로 반환

let users = userName.filter(function (user) {
  return user.age >= 30;
});
let names = users.map(function (user) {
  return user.name;
});
console.log(names);

// 메서드 체이닝 => 메서드를 연속해서 사용
let names02 = userName
  .filter((user) => user.age >= 30)
  .map((user) => user.name);
console.log(names02);
let addedNum = [1, 2, 3].map((num) => num + 1);
console.log(addedNum);

let movieList = [
  { title: "범죄도시", genre: "액션" },
  { title: "극한직업", genre: "코미디" },
  { title: "범죄도시2", genre: "액션" },
  { title: "러브레터", genre: "멜로" },
];

// 액션 장르의 영화의 제목만 배열

let actionMovieList = movieList.filter((movie) => movie.genre === "액션");
let actionMovieNameList = actionMovieList.map((movie) => movie.title);
console.log(actionMovieList);
console.log(actionMovieNameList);

// reduce

let scoreList = [90, 80, 70, 70, 60];
let totalScore = 0;
for (let i = 0; i < scoreList.length; i++) {
  totalScore += scoreList[i];
}
console.log(totalScore);

let total = scoreList.reduce(function (acc, curr) {
  return acc + curr;
}, 0);
let totalWithArrow = scoreList.reduce((acc, curr) => acc + curr, 0);

// 콜백
let total03 = scoreList.reduce(sum, 0);

function sum(a, b) {
  return a + b;
}

console.log(total);
console.log(totalWithArrow);
console.log(total03);
