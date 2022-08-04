//끝말잇기
// 1. 이전단어의 끝글자와 현재 단어의 시작글자 동일
// 2. 중복된 단어 X => 배열
// 3. 위의 두 조건이 만족하면 이전 단어(비교할 단어)를 입력한 단어로 변경

import {useReducer} from "react";

const initialState ={
    input:"",
    keyword:"리액트",
    keywordList:[],
}

function reducer(state, action){
    switch(action.type){
        case "input_change" :
            return {...state, input:action.input}
        case "keyword_change": 
            return{...state, keyword:state.input, keywordList:[...state.keywordList,state.input]}
        default:
            return state;
    }
}

function Shiritori(){
const[state, dispatch] = useReducer(reducer, initialState);
const[input, keywordList] = state;
const prevKeyword = keywordList[keywordList.length-1]

const ChangeKeyword =()=>{
if(input.charAt(0) === prevKeyword.charAt(prevKeyword.length-1)){
    if(keywordList.includes(input)){
        alert("이미 등록된 단어입니다.")
    }else{
        dispatch({type:"keyword_change"})}
    
}
    return(
        <div>
            <h3>{prevKeyword}</h3>
            <input type="text" onChange={(e)=>dispatch({type:"input_change", input:e.target.value})}/>
            <button onClick={ChangeKeyword}>입력</button>

        </div>
    )

}
}


export default Shiritori;
