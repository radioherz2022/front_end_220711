import { useRef, useState } from "react";
import TodoBox from "./component/TodoBox";
import TodoHeader from "./component/TodoHeader";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import {Reset} from "styled-reset"

function App() {
  // userReducer 한번에 관리할 수 있게 변경
const[todoList, setTodoList] = useState([
  {id:1, text:"오늘의 할 일", done:false},
  {id:2, text:"투두리스트 시험 중", done:false},

]);

const nextId = useRef(3);

const count = todoList.filter((todo) => !todo.done).length;

// input 버튼을 통해 새로운 리스트를 만드는 변수 만들기!
const onCreate = (text) => {
  setTodoList(todoList.concat({id:nextId.current, text:text, done:false}));
  nextId.current++;
  // 추가한 텍스트 값이 동일하게 나오기 때문에 nextId.current++로 추가할수록 숫자가 늘어나게
} 

const onToggle = (id) => {
  setTodoList(
    todoList.map((todo) => {
    return todo.id === id ? {...todo, done: !todo.done} :todo; })
    // 데이터에 특정함수를 쓰는 것은 map함수를 써야함, 새로운 배열을 반환
    // 지금 배열에 있는 id와 클릭한 id가 같다면 (true 일 경우) 기존 todo를 복사하고, todo의 done을 반전시키고, (false일 경우)그래도 리턴
    //      todo.id      와        id        ?              ...todo,            done: !todo.done         :     todo
  )
}  

const onRemove = (id) => {
  setTodoList(
    todoList.filter((todo) => todo.id !== id )
    // 특정값을 없애는 filter
    // id값을 이용해서 각 요소중에 지금 받은 인자의 아이디와 같지 않은 아이디를 모아주면 특정 아이디만 삭제 가능
  )
}

  return (
    <>
    <Reset/>
      <TodoBox>
        <TodoHeader count={count}/>  
        <TodoList todoList={todoList} 
        onToggle={onToggle} 
        onRemove={onRemove}/>    
        <TodoInput onCreate={onCreate}/>   
      </TodoBox>
    </>
  );
};

export default App;
