import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [increaseNum, setIncreaseNum] = useState(0);

  function add() {
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
