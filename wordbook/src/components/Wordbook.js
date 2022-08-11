import { useEffect } from "react"
import styled from "styled-components"
import { useWordState, WordProvider } from "./contexts/WordContext"
import WordbookHeader from "./WordbookHeader"
import WordbookList from "./WordbookList"
import WordInput from "./WordInput"



export default function Wordbook(){
    const state=useWordState();
    // 브라우저에 저장하는 것
    useEffect(() => {
        localStorage.setItem("wordList", JSON.stringify(state))
    }, [state])


    return ( 
    <Template>
            <WordProvider>
                <WordbookBlock>
                    <WordbookHeader state={state}/>
                    <WordbookList/>
                    <WordInput />
                </WordbookBlock>
            </WordProvider>
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