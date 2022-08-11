import { useState } from "react"
import styled, { css } from "styled-components"
import {FaTrash} from "react-icons/fa"
import {AiFillCheckCircle, AiOutlineCheckCircle} from "react-icons/ai"

export default function WordbookList({wordList, onRemove, onToggle}){
    return(
    <WordListBlock>
        {wordList.map(word => (<WordItem key={word.id} word={word} 
        onRemove={onRemove}
        onToggle={onToggle}/>))}      
    </WordListBlock>
)
}
// map을 이용해서 Wordbook에 있는 useReducer의 기본 내용을 연결, 표출해주는 방법




function WordItem ({word, onRemove, onToggle}){
    const [active, setActive] = useState(false);
    return (
        <WordItemBlock active={active}>
            <EngBox onClick = {() => setActive(!active)}>
                <div onClick={(e) => {
                    e.stopPropagation();
                    onToggle(word.id);
                    }}>
                    {word.active ? <AiFillCheckCircle/> : <AiOutlineCheckCircle/>}
                </div>                
                <h3>{word.eng}</h3>
                <FaTrash 
                onClick={(e) => {
                    // 이벤트 전파를 막는 것(버블링 제거)
                    e.stopPropagation();
                   onRemove(word.id);
                    }}/>

            </EngBox>
            
            {active && 
            <p>
                {word.kor.map((text, index) => 
                <div>{index + 1}.{text}</div>)}
            </p>} 
            
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