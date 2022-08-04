import { useState } from "react";

function Counter() {
    // useState(초기값):[초기값, set함수]를 반환한다.
    // => set함수를 통해 새로운 값을 업데이트하면 렌더링이 다시 일어난다.
  const [count, setCount] = useState(0);
  const [increaseNum, setIncreaseNum] = useState(0);

  function add() {
    // 비동기적으로 작동 => 일괄적으로 처리
    setCount(count + increaseNum);
  }
  function sub() {
    // 최적화할 때 사용
    // 함수형 업데이트 set함수의 인자로 콜백함수를 전달하면 콜백함수의 첫번재 인자로 최신 상태값을 전달
    setCount((num) => num - increaseNum);
  }

  function onChangeIncrease(e) {
    let increaseNum = parseInt(e.target.value);
    setIncreaseNum(increaseNum);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={add}>증가</button>
      <button onClick={sub}>감소</button>
      <input type="number" onChange={onChangeIncrease} />
    </>
  );
}

export default Counter;
