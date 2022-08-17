// import styled from "styled-components";

export default function TodoInput({onCreate, onChangeInput, input}){
    return <div>
        <input type="text" onChange={onChangeInput} value={input} />
        <button onClick= {onCreate} >등록</button>
    </div>;
}