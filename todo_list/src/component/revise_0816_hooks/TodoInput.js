import { useState } from "react";
import styled, { css } from "styled-components";

export default function TodoInput({handleInput, createTodo, input}){
    const [active, setActive] = useState(false);
    const onClickBtn = () => {
        if(active && input.trim() === "") return;
        if(active){
            createTodo();
            setActive(false);
        }else{
            setActive(true);
        }
    }
    return (
    <Block active = {true}>
        <input type ="text" onChange={handleInput} value={input}></input>
        <Btn onClick={onClickBtn}>{active ? "Submit":"Add"}</Btn>
    </Block>
    )
}



const Block = styled.div`
flex:1;

input{
    width: 100vw;
    height: 40px;
    border: 1px solid #ddd;
    outline:none;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.25s;
    ${({active}) => active && css`
        transform: scaleY(1);
    `}
}

`

const Btn = styled.div`
    padding:10px 0;
    height: 40px;
    background-color: #ff4d00;
    line-height: 40px;
    text-align: center;
    color:#fff;
    cursor: pointer;
`