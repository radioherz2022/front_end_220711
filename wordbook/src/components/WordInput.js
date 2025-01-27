import { useState } from "react";
import styled from "styled-components";
import { useWordDispatch, useWordNextId } from "./contexts/WordContext";

export default function WordInput(){
    const dispatch = useWordDispatch();
    const nextId = useWordNextId();
    const[inputs, setInputs] = useState({eng:"", kor:"",});
    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value,
        })
    }

    const onCreate = (eng, kor) => {
        dispatch({
        type:"create_word", 
        word :{id:nextId.current, eng:eng, kor:kor}, 
        });
        nextId.current++;
    };

    return ( 
    <InputBlock>
        <input type="text" placeholder="영단어를 입력해주세요" 
        name="eng" onChange={(e) => onChange(e)} value={inputs.eng}/>
        <input type="text" placeholder="뜻을 ,으로 구별하여 입력해주세요" 
        name="kor" onChange={onChange} value={inputs.kor}/>
        <button 
        onClick={() => {
            onCreate(inputs.eng, inputs.kor.split(","));
            setInputs({eng : "",kor : "",});
            // 입력후 input 박스 빈공간 만들어주기           
        }} >등록</button>
        
    </InputBlock>
    )
}

const InputBlock = styled.div`
    position: absolute;
    bottom:0;
    left:0;
    width: 100%;
    padding: 20px 20px;

    input{
        width:100%;
        padding: 10px 5px;
        outline:none;
        border: 1px solid #ddd;
        &:nth-child(2){
            margin-top: 10px;
        }
    }
    button {
        width: 100%;
        background-color: royalblue;
        border-style: none;
        padding: 10px 0 ;
        margin-top: 10px;
        color:#fff;
        font-weight: 800;
    }
    
`