// 커스텀훅 : 리액트 Hooks을 조합해서 커스텀해서 사용

import { useReducer } from "react";

const initialState = {
    input:"",
    keywordList:["리액트"],
}

function reducer(state, action){
    switch (action.type) {
        case "input_change" :
            return {...state, input:action.input}
        case "keyword_change": 
            return {...state, keyword:state.input, keywordList:[...state.keywordList, state.input],
            }
        default:
            return state;
    }
}

export function useWordRelay(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const {input, keywordList} = state;
    const prevKeyword = keywordList[keywordList.length -1];

    function changeKeyword(){
        if(input.charAt(0) === prevKeyword.charAt(prevKeyword.length-1)){
            if(!keywordList.includes(input)){
                dispatch({type:"keyword_change"})
            }else{
                alert("이미 등록된 단어입니다.")
            }
        }
    }
    function onChangeInput(e){
        dispatch({type:"input_change", input:e.target.value})
    }

return [state, onChangeInput, changeKeyword]
}