import styled, { css } from "styled-components";
import {FaTrash} from "react-icons/fa"
import {AiOutlineCheck} from "react-icons/ai"
import { useTodoDispatch } from "./useTodoContext";

export default function TodoItem({todo}){
    const dispatch = useTodoDispatch();
    const toggleTodo = () => {
        dispatch({type:"toggle_todo", id:todo.id});
    }
    const removeTodo = () => {
        dispatch({type:"remove_todo", id:todo.id});
    }
    return (
    <Block>
        <BtnCheck done={todo.done} onClick={toggleTodo}><AiOutlineCheck size={16}/></BtnCheck>
        <p>{todo.text}</p>
        <BtnDelete><FaTrash onClick={removeTodo}/></BtnDelete>
    </Block>
    )
}

const Block = styled.li`
        display:flex;
        align-items: center;
        border-bottom: 1px solid #ddd;
    p{
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
    }
`
const BtnCheck = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width:22px;
        height:22px;
        margin-left: 10px;
        border-radius: 50%;
        border:2px solid #000;
        
        ${({done}) => 
        done && css`
        background-color: #000;
        color:#fff;
`}

`

const BtnDelete = styled.div`
        flex:1;
        text-align: center;
        justify-content: flex-end;
        background-color: blanchedalmond;
        height: 50px;
        width: 80px;
        line-height: 50px;
        border-style: none; 

`