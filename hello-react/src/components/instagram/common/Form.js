import { lighten } from "polished";
import { useState } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import Input from "./Input";

export default function Form(){
    const [inputs, setInputs] = useState({
        username :"",
        password:"",
    })
    // onToggle이나 onRemove같은 이벤트를 한꺼번에 처리할 필요 없어서
    // useState로 하나의 값을 상태 관리함
    const [hide, setHide] = useState(true);
    const {username, password} = inputs;
    const btnActive = username.length > 0 && password.length > 5 ;

    const handleInput = (e) => {
        const {name, value} = e.target;
        //비구조할당
        setInputs({
            ...inputs,[name]:value,
        })
// 객체 업데이트(setOOOO) 일 때 항상 이런 폼으로 정리
// e.target.value = "username" = inputs.username
}
    return ( 
    <form onSubmit = {(e) => e.preventDefault()}>
        <FormBlock onClick={handleInput}>
            <Input placeholder="username, phone or email" 
            onChange={handleInput}
            name="username"
            value={username}/>
            <Input rightContent=
            {<BtnDisplay onClick={() => setHide(!hide)}>{hide ? "Show" : "Hide"}</BtnDisplay>}
            hide={hide}
            placeholder="password"
            onChange={handleInput}
            name="password"
            value={password}/>
            <Button text = "Log In" margin={"margin-top:15px"}
            active={btnActive} />
        </FormBlock>
    </form>
    );
}



const FormBlock = styled.div`
    padding : 0 40px;
`

const BtnDisplay = styled.button`
    border: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    color : rgb(38,38,38);
    &:active {
        color:${lighten(0.3, "rgb(38,38,38)")}
    }

`