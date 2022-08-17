import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function counter(state = 10,action){
  switch(action.type){
    case "increment":
      return state +1;
    case "decrement":
      return state -1;
    default:
      return state;
  }
}

// {id:1, text:"dfdfd", done:false} 형식의 데이터
function todoReducer(state=[],action){
 switch(action.type){
  case "create_todo":
    return [...state, {id:action.id, text:action.text, done:false}]
    default:
      return state;
 }
}

// 함수 counter와 함수 todoReducer를 합치는 방법
// const rootReducer = combineReducers({
//   counter : counter,
//   todo : todoReducer,
// })

// store:상태값의 저장소.
// => dispatch와 getState 메서드를 가지고 있다.
// redux는 @reduxjs/toolkit의 configureStore 사용을 권장한다.
// const store = createStore(rootReducer);

const store = configureStore({
  // reducer에 객체 형태로 여러 reducer 지정하면 자동으로 합쳐진다.
  reducer:{
    counter,
    todo : todoReducer,
  }
})

store.dispatch({type:"create_todo", id:1, text:"할 일 추가"});

function App() {

  return (
    <Provider store={store}>
          <Counter/>
          <Todo/>
    </Provider>

  );
}

export default App;
