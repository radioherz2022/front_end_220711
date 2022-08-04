import React from "react";

function Hello({ title, color, children }) {
  return (
    <>
      <h1 style={{ color }}>Hello, {title}</h1>
      <p>{children}</p>
    </>
  );
}

Hello.defaultProps = {
  title: "React",
  color: "red",
};

// 원래 기본구조----------------------------------------
// let title = props.title
// let desc = props.desc
// [=>객체 비구조화 할당 방식으로 let {title,desc} = props]
// function Hello({props}) {
//   return (
//     <>
//       <h1>Hello, {props.title}</h1>
//       <p>{props.desc}</p>
//     </>
//   );
// }

export default Hello;