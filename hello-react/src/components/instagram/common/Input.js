import styled, { css } from "styled-components";
import { bg_color, border_color } from "../Colors";

export default function Input({
    rightContent, 
    hide, 
    placeholder, 
    onChange, 
    name, 
    value,
    }){
    return (
    <InputBox>
    <PlaceholderText active = {value.length > 0}>{placeholder}</PlaceholderText>
        <StyledInput 
        name={name}
        type={hide ? "password" : "text"} 
        onChange={onChange}
        active={value.length > 0}
        />
        {rightContent}
    </InputBox>
    )
}

const StyledInput = styled.input`
    padding: 10px;
    outline: none;
    background: none;
    border: none;
    flex:1;
    z-index: 100;
    ${({active}) => active && css`
        padding:16px 10px 4px;
        
    `}
`

const InputBox = styled.div`
    display: flex;
    height: 35px;
    border: 1px solid ${border_color};
    background-color: ${bg_color}; 
    position:relative;
    & + & {
        margin-top: 5px;
    }
    // li + li 인접형제 연산자
`

const PlaceholderText = styled.span`
    position: absolute;
    top:0;
    left:10px;
    height: 35px;
    line-height: 33px;
    font-size: 0.9em;
    color:rgb(142,142,142);
    transition: 0.25s;
    ${({active}) => active && css`
        font-size:12px;
        transform: translateY(-8px);
        
    `}
`