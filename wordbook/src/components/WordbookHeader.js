import styled, { css } from "styled-components";
import { useWordState } from "./contexts/WordContext";

export default function WordbookHeader(){
    const state = useWordState();
    const count = state.length;
    const memorizedNum = state.filter(word => word.active).length;
// NaN은 falsy한 값
// => 값1 || 값2 를 사용하면 값1이 true이면 값1을, 값1이 false면 값2로 평가
// => 0/0은 0이 아니라 NaN
    const percent = (memorizedNum/count)*100 || 0;
    const todayStr = new Date().toLocaleDateString("ko-KR", {
        dateStyle : "full"
    })


    return (
    <HeaderBlock>
        <h2>{todayStr}</h2>
        <p>외운단어{memorizedNum}/{count}</p>
        <StatusBar status={(memorizedNum/count)*100}>
            <p>{Math.floor((memorizedNum/count)*100)}%</p>
        </StatusBar>
    </HeaderBlock>
    )
}

const HeaderBlock = styled.div`
    padding:10px 20px;
    border-bottom: 1px solid #ddd; 
    p{
        margin-top: 10px;
    }

`

const StatusBar = styled.div`
    height: 14px;
    background-color: #ddd;
    border-radius: 7px;
    margin-top: 5px;
    overflow: hidden;
    position: relative;
    color:#fff;
    p {
        position: absolute;
        font-size: 12px;
        text-align: center;
        line-height: 12px;
        margin: 0;
        left:0;
        top:0;
    }
    &::before{
        content: "";
        display: block;
        height: 100%;
        ${({status}) => css`
         transform : scaleX(${status}%);
        `}
        transform-origin: left ;
        background-color: royalblue;
        transition: 0.4s;
    }
    
`