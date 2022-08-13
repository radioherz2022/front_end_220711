import { useState } from "react";
import styled, { css } from "styled-components";
import { point_color, white_color } from "../color";

export default function TodoInput({onCreate}){

    const [isEdit, setIsEdit] =  useState(false);
    const [input, setInput] = useState("");

    return (
    <Block isEdit ={isEdit} >
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input}></input>
        {isEdit ? (
        <Button inputType={input !== ""} 
            onClick={() => {
                if (input !== "") onCreate(input);
                setInput("");
                setIsEdit(false);
                }}>Submit</Button>
        ):(
        <Button inputType={true} onClick= {() => setIsEdit(true)}>Add</Button>
        )
    }
        
    </Block>
    )
}

const Block=styled.div`
padding: 10px;

input {
    width: 100%;
    height: 30px;
    padding: 0 5px;
    outline: none;
    border:1px #ddd solid;
    margin-bottom: 5px;
    opacity: 0;
}

${({isEdit}) => 
isEdit && css`
        input{
            opacity: 1;
            }
` };

`;


const Button = styled.button`
    width:100%;
    height: 30px;
    background: none;
    border: none;
    background: ${point_color};
    color:${white_color};
    background-color: #ddd;

    ${({inputType}) => inputType && css`
        background-color: ${point_color};
        cursor: pointer;
    `}

`;

    