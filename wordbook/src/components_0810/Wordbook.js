import { useEffect } from "react"
import { useReducer, useRef } from "react"
import styled from "styled-components"
import WordbookHeader from "./WordbookHeader"
import WordbookList from "./WordbookList"
import WordInput from "./WordInput"

function reducer(state, action){
    switch (action.type) {
        case "create_word" :
            // ...state 뜻은 기존배열에서 
            return [...state, action.word];
        case "remove_word":
            return state.filter((word) => word.id !== action.id);
        case "checked_word":
            return state.map((word) => 
                word.id === action.id ? {...word, active: !word.active} : word)
        default:
            return state;
    }

}

const initialState = JSON.parse(localStorage.getItem("wordList"));

export default function Wordbook(){
const [state, dispatch] = useReducer(reducer, [
    // const initialState를 여기에 바로 씀.
    {id:1, eng:"dispatch", kor:["보내다"], active:false },
    {id:2, eng:"reducer", kor:["변형하는 것","환원제"], active:true},
])

const nextId = useRef(state[state.length -1].id+1);

const onCreate = (eng, kor) => {
    dispatch({
    type:"create_word", 
    // eng:eng 매개변수와 값이 같을 경우 생략 가능
    // word : {id:1, eng:"dispatch", kor:"보내다"} 
    // 이것에 대한 초기샘플을 여기에 적어준 것
    // eng 는 영어단어 입력창 값, kor는 뜻 입력창 값
    word :{id:nextId.current, eng:eng, kor:kor}, 
    });
    nextId.current++;
};

const onRemove = (id) => {
    dispatch({type: "remove_word", id});
}

const onToggle = (id) => {
    dispatch({type:"checked_word", id});
}

// 브라우저에 저장하는 방법
    useEffect(() => {
        localStorage.setItem("wordList", JSON.stringify(state))
    }, [state])

    return ( 
    <Template>
        <WordbookBlock>
            <WordbookHeader state={state}/>
            <WordbookList wordList={state} onRemove={onRemove} onToggle={onToggle} />
            <WordInput onCreate={onCreate}/>
        </WordbookBlock>
    </Template>
    )
}



const Template = styled.div`
display: flex;
justify-content: center;
align-items: center;

height: 100vh;
background-color: #f2f2f2;
`

const WordbookBlock = styled.div`
width: 500px;
height: 700px;
border:1px solid #ddd;
border-radius: 6px;
background-color: #fff;
position:relative;
`