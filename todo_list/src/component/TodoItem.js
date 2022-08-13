import styled, { css } from "styled-components";
import { bg_color, main_color, white_color } from "../color";
import {FaTrash} from "react-icons/fa"

export default function TodoItem({todo, onToggle, onRemove}){
    return <Block onClick = {() => onToggle(todo.id)} done={todo.done}>
        <p>{todo.text}</p>
        <BtnDel onClick= {(e) => { 
            e.stopPropagation();
            onRemove(todo.id);
            }}>
            <div><FaTrash/></div>
        </BtnDel>
        </Block>;
}

const Block = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 32px;
    padding-left:20px;
    border-bottom: 1px solid #ddd;
    user-select: none;
    ${({done})=> done && css`
    p{
        text-decoration: line-through;
        color:${bg_color};
    }
        `} 

`

const BtnDel = styled.div`
    overflow: hidden;
    div {
        transform:translate(101%);
        background-color: ${main_color};
        text-align: center;
        line-height: 32px;
        width: 50px;
        height:32px;
        color:${white_color};
    }
    &:hover {
        div{
        transform: translate(0);
        }
    }
    
`