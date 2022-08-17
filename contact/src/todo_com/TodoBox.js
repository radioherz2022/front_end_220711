
import { useReducer, useRef } from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const initialState = {
    todoList : [
        {id:1, text:"오늘 할 일 적기", done:false},
        {id:2, text:"외우는 중", done:false},
    ],
    input:"",
}


function reducer(state,action){
    switch(action.type){
        case "create_todo" :
            return {...state,
                input:"",
                todoList : state.todoList.concat(action.todo),}
        case "change_input":
            return {...state, input : action.input};
        default :
        return state;
    }
}

export default function TodoBox(){
    const [state, dispatch] = useReducer(reducer, initialState);

    const nextId = useRef(3)

    const onCreate = (text) => {
        dispatch({
        type:"create_todo", 
        todo : {id: nextId.current, text, done: false}
        });
        nextId.current++;
    };

    const onChangeInput = (e) => {
        dispatch({type:"change_input", input:e.target.value});
    };

    return (
        <>
          <TodoHeader/>
          <TodoInput onCreate={onCreate} onChangeInput={onChangeInput} input={state.input}/>
          <TodoList/>
        </>
      );
}