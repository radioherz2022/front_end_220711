import { useState } from "react"
import styled from "styled-components"
import {FaTrash} from "react-icons/fa"
import {AiFillCheckCircle, AiOutlineCheckCircle} from "react-icons/ai"
import { useWordDispatch, useWordState } from "./contexts/WordContext"

export default function WordbookList(){
    const wordList = useWordState();
    return(
    <WordListBlock>
        {wordList.map(word => (<WordItem key={word.id} word={word} />))}      
    </WordListBlock>
)
}
// map을 이용해서 Wordbook에 있는 useReducer의 기본 내용을 연결, 표출해주는 방법



function WordItem ({word}){

    const [active, setActive] = useState(false);
    const dispatch = useWordDispatch();
    const onToggle = (e) => {
        e.stopPropagation();
        dispatch({type:"toggle_word", id:word.id})
        }

    const onRemove = (e) => {
        e.stopPropagation();
        dispatch({type:"remove_word", id:word.id});
        }

    const CheckIcon = word.active ? <AiFillCheckCircle/> : <AiOutlineCheckCircle/>
    const Contents = word.kor.map((text, index) => <div>{index + 1}.{text}</div>)

    return (
        <WordItemBlock onClick = {() => setActive(!active)}>
            <EngBox>
                <div onClick={onToggle}>{CheckIcon}</div>                
                <h3>{word.eng}</h3>
                <FaTrash onClick={onRemove}/>
            </EngBox>
            {active && <p>{Contents}</p>} 
        </WordItemBlock>
    )
}


const WordListBlock = styled.ul`
overflow: hidden;
`

const WordItemBlock = styled.li`
padding: 10px 20px;
cursor: pointer;


p{
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    margin-top: 5px;
}

`

const EngBox = styled.div`
    display: flex;
    align-items: center;
    h3 {
        flex:1;
        margin-left: 10px;
    }
`