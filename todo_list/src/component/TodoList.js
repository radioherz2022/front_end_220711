import styled from "styled-components";
import TodoItem from "./TodoItem";

export default function TodoList({todoList, onToggle, onRemove}){
    return ( 
    <Block>
        {todoList.map((todo) => (
        <TodoItem 
        key={todo.id} 
        todo={todo} 
        onToggle={onToggle} 
        onRemove={onRemove}/>))}
    </Block>
    // 아래 각 객체를 todo라는 이름으로 접근하게 될 것!
    // 첫번째 객체인 {id:1, text:"오늘의 할 일", done:false}
    // 두번째 객체인 {id:2, text:"투두리스트 시험 중", done:false}
    // 
    )
}

const Block = styled.ul`
    flex:1;


`