import { bg_color, white_color } from "../color";
import TodoHeader from "../component/TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "../component/TodoList";
import { useMemo, useReducer, useRef } from "react";
import styled from "styled-components";

const initialState = {
    todoList:[
        {id:1, text:"오늘의 할 일", done:false},
        {id:2, text:"투두리스트 시험 중", done:false},
    ],
    input:"",
    isEdit : false,
}


function reducer(state, action){
    switch(action.type){
        case "create_todo" :
            return {
                ...state,
                input:"",
                todoList : state.todoList.concat(action.todo),
        }
        case "toggle_todo" :
            return {
                ...state, 
                todoList : state.todoList.map((todo) => 
                todo.id === action.id ? {...todo, done:!todo.done }:todo
                ) }
        case "remove_todo":
            return {
                ...state, 
                todoList : state.todoList.filter((todo) => todo.id !== action.id),
            }
        case "change_input":
            return {...state, input : action.input};
        case "change_edit":
            return {...state, isEdit : action.isEdit};
            default:
                return state;
    }
}

// reducer(state, action) => (최신상태값, 액션객체)
// reducer함수의 return값은 최신상태가 된다


export default function TodoBox(){
      // userReducer 한번에 관리할 수 있게 변경

const [state, dispatch] = useReducer(reducer, initialState);
// [state, dispatch] => [최신상태값, reducer함수의 상태값을 업데이트 할 수 있는 요청 => reducer의 action값으로 이동 ]


const nextId = useRef(3);

const count = useMemo(() => {
    return state.todoList.filter((todo) => !todo.done).length;
  }, [state.todoList]);

  // usdMemo를 사용하고 안하고가 화면에 출력되는 것에 영향을 주더라~
  // ????????????????????????? 물어보기

// const count = state.filter((todo) => !todo.done).length;
  
const onCreate = (text) => {
    dispatch({
    type:"create_todo", 
    todo : {id: nextId.current, text, done: false}
    });
    nextId.current++;
};

const onToggle = (id) => {
    dispatch({type:"toggle_todo", id});
};

const onRemove = (id) => {
    dispatch({type:"remove_todo", id});
};

const onChangeInput = (e) => {
    dispatch({type:"change_input", input:e.target.value});
};

const onChangeEdit = (isEdit) => {
    dispatch({type:"change_edit", isEdit});
};

    return ( 
    <Template>
        <Block>
            <TodoHeader count={count}/>  
            <TodoList todoList={state.todoList} 
                    onToggle={onToggle} 
                    onRemove={onRemove}/>    
            <TodoInput 
                    onCreate={onCreate} 
                    onChangeInput={onChangeInput}
                    input = {state.input}
                    isEdit ={state.isEdit}
                    onChangeEdit={onChangeEdit}
                    
                    />   
        </Block>
    </Template>
    )
}

const Template = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:100vw;
height:100vh;
background-color: ${bg_color};
`

const Block = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height : 500px;
border: 1px solid #bbb;
border-radius: 5px;
background-color: ${white_color};
/* overflow: hidden; */

`