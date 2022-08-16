import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";



export default React.memo(function TodoList({todo_list}){
    return (
    <Block>
        {todo_list.map((todo) => 
        <TodoItem key={todo.id} todo={todo} />
        )}
    </Block>
    )
})

const Block = styled.ul`
height: 100vh;

`

