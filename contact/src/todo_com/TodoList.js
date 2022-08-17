// import styled from "styled-components";

export default function TodoList({todoList}){
    return <div>
        <ul>
        {todoList.map((todo) => (
        <li key={todo.id} todo={todo}>{todo.text}</li>
        ))}
        </ul>

    </div>;
}