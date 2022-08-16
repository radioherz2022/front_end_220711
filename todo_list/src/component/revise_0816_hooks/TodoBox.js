
import { useMemo } from "react";
import styled from "styled-components";
import Todoheader from "./Todoheader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import useTodoReducer from "./useTodoReducer";

// export const TodoContext = createContaxt(null);

// Reducer로 선택한 함수값이 return 최신 상태값이 됩니다.

export default function TodoBox(){
const {state, createTodo, toggleTodo,removeTodo,handleInput } = useTodoReducer();
const {input, todo_list} = state;

const doneCount = useMemo(() =>todo_list.filter((todo) => !todo.done).length, [todo_list] ) ;
// todo의 done값이 false인 데이터만 모은 것(filter)


return (
    // <TodoContext.Provider value={{}}>
    <Block>
        <Todoheader totalCount={todo_list.length} doneCount={doneCount}/>
        <TodoList 
        todo_list={todo_list} 
        toggleTodo={toggleTodo} 
        removeTodo={removeTodo}/>
        <TodoInput 
        input={input}
        handleInput={handleInput}
        createTodo={createTodo}
        />
    </Block>
    // </TodoContext.Provider>
)
}

const Block = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

`

// 반응형 :iphone 12 Pro 를 기본 디스클레이로 지정