import { useState, useRef } from "react";
// React Hook => useState,useRef

function InputTitle() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
    age: 0,
  });

  const inputRef = useRef();

  function onChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  const { name, nickname, age } = inputs;
  const onRemove = () => {
    setInputs({
      name: "",
      nickname: "",
      age: 0,
    });
    inputRef.current.focus();
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={onChange}
          name="name"
          ref={inputRef}
          value={name}
        />
        <input
          type="text"
          onChange={onChange}
          name="nickname"
          value={nickname}
        />
        <input type="number" onChange={onChange} name="age" value={age} />
        <button onClick={onRemove}>삭제</button>
      </div>
      <div>
        {name}({nickname}):{age}
      </div>
    </>
  );
}
// import할 때 {NUM}과 같은 형식
export const NUM = 1;
// import InputTitle
export default InputTitle;
