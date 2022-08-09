import { useState } from "react"
import styled, { css } from "styled-components"
import {FaAngleDown, FaCheck} from "react-icons/fa"

export default function Dropdown(){
    const [active, setActive] = useState(false);
    const [value, setValue] = useState("메뉴1");
    const onClickMenu = (value) =>{
        setValue(value);
        setActive(false);
    }
    return(
        <Block active={active}>
            <ValueBox onClick={() => setActive(!active)}>
                {value}
                <span><FaAngleDown/></span>
                </ValueBox>
            {/* 
            기본 제공되는 셀렉박스
            <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
            </select> */}
            <ul >
                <MenuItem text="메뉴1" onClickMenu={onClickMenu} active={value === "메뉴1"}/>
                <MenuItem text="메뉴2" onClickMenu={onClickMenu} active={value === "메뉴2"}/>
                <MenuItem text="메뉴3" onClickMenu={onClickMenu} active={value === "메뉴3"}/>
            </ul>
        </Block>
    )
}

function MenuItem({text, onClickMenu, active}){
    return (
    <MenuBlock onClick={() => onClickMenu(text)}>
        {text}
        {active && <FaCheck size={10}/>}
    </MenuBlock>
    )
}

const Block = styled.div`
padding:10px;
width:100px;

    ul{
    display: none;
    border: 1px solid #ddd;
    position: relative;

    &::before{
        content: ""; // 가상연산자 사용시 필수
        display: block;
        width: 10px;
        height: 10px;
        background-color: #fff;
        transform: rotate(-45deg);
        border-top: 1px solid #ddd;
        border-right: 1px solid #ddd;
        position: absolute;
        top:-6.5px;
        right:10px;
    }
    }


    ${({active}) => active && css`
        ul{
        display: block;
        }
        ${ValueBox}{
            span {
                transform: rotate(180deg);
            }
        }
    ` }
`;

const ValueBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    user-select: none;
`

const MenuBlock = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    user-select: none;
    &:hover {
        background-color: #ccc;
        }
    position: relative;
    z-index: 100;
        
`