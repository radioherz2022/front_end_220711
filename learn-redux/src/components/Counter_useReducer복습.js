import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case "increment":
        return state+1;
        case "decrement":
        return state-1;
            // 현재 state는 0이니까 "increment"일 case는 반환값이 return(0)+1 = 1로 action값으로 이동
            // state = initialState로 사용했던 값과 동일
        default:
            return state;
    }
}

export default function Counter(){
    const [count, dispatch] = useReducer(reducer, 0);
    return (
    <div>
        <h3>{count}</h3>
        <button onClick={() => dispatch({type:"increment"})}>+1</button>
        <button onClick={() => dispatch({type:"decrement"})}>-1</button>
    </div>
    )
}