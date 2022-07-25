// 객체 : 여러 데이터를 상태로 가지는 데이터
// 프로퍼티 : 키(key) : 값(value) => key도 식별자 이름 규칙에 따라서 작성
//   => 키 이름으로 숫자도 가능하긴 함.
let user = {
  age: 30,
  name: "seok",
  height: 173,
};

console.log(user.age);
user.age = 31;
user.weight = 70; // 없는 키값에 할당하면 새로운 프로퍼티 생성
console.log("몸무게 : ", user["weight"]); // 객체["키값"] 처럼 [] 안에 문자열로 참조 가능
// react에서 자세히 설명

let arr = ["height", "weight", "name"];
for (let i = 0; i < arr.length; i++) {
  console.log(user[arr[i]]);
}

console.log(user);
console.log(user.color); // 없는 키값을 참조하면 undefined
console.log(user.age, user.weight);

// 메서드 : 객체의 프로퍼티값으로 지정된 함수.
// 메서드 호출 => 객체.메서드이름(); 형태로 실행
let dog = {
  age: 10,
  name: "coco",
  bow: function () {
    console.log("멍멍!");
  },
};
dog.bow();

// this : 메서드를 호출한 객체를 가르킨다. => user.greeting();의 user가 this에 해당
// this를 통해서 객체 고유값을 참조하는 메서드를 만들 수 있다.
//   => 같은 함수지만 객체마다 다른 결과를 낼 수 있다.
let user02 = {
  age: 30,
  name: "seok",
  height: 173,
  greeting: function () {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};

let user03 = {
  age: 30,
  name: "minsu",
  height: 173,
  greeting: function () {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};

user02.greeting();
user03.greeting();

let rect = {
  width: 100,
  height: 100,
  getArea: function () {
    console.log(this.width * this.height);
  },
};

rect.getArea();

// 메서드 내부에서 함수 실행시 this가 제대로 가르켜지지 않는다.
//   => 화살표 함수는 this가 없기 때문에 상위 함수의 this를 찾아간다.
let obj = {
  name: "seok",
  outer: function () {
    console.log("outer 실행!");
    // function inner() {
    //   console.log("inner 실행");
    //   console.log(this.name);
    // }
    let inner = () => console.log(this.name);
    inner();
  },
};

obj.outer();

// 문제. 삼각형 객체 만들기 => 높이와 너비를 가지고 넓이를 구하는 메서드
let triangle = {
  height: 50,
  width: 20,
  getArea: function () {
    console.log((this.height * this.width) / 2);
  },
};

triangle.getArea();

// 문제. 자동차 객체 => 연비와 연료 => 연비 * 연료 => 갈 수 있는 거리
// obj.name = "minseok" => obj의 name값 재할당
//  => 갈 수 있는 거리 구하는 메서드
//  => 심화. 매개변수를 통해 이동거리 출력하는 메서드(연료 줄이기)
//  => 출제의도는 this를 사용하셔라.
let car = {
  mileage: 16, // 연비
  gas: 20, // 연료량
  getDistance: function () {
    console.log("주행가능거리 : " + this.mileage * this.gas + "km");
  },
  move: function (distance) {
    this.gas = this.gas - distance / this.mileage;
    console.log(`${distance}km 이동! 남은연료 : ${this.gas}l`);
  },
};
car.getDistance();
car.move(48);
car.move(32);
car.move(10);
car.move(20);

// 예시 16km 연비의 자동차
// car.move(32) => "32키로 이동! 남은연료 : 18l" 출력
// car.move(48) => "48키로 이동! 남은연료 : 15l" 출력
