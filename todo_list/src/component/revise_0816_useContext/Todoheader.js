import styled from "styled-components";
import React from "react"

export default React.memo( function Todoheader({totalCount, doneCount}){
    const todayStr = new Date().toLocaleDateString(
        "ko-KR", {dateStyle:"full"}
    )
    // todo_list와 input이 하나의 state로 관리되기 때문에
    // 여기서 사용하지 않는 input이 업데이트가 되어도 리렌더링이 일어난다.
    // const {todo_list} = useTodoState();
    const percent = totalCount === 0 ? 0 : Math.floor((doneCount/totalCount)*100);
    return ( 
    <Block>
            <DateText>{todayStr}</DateText>
            <TeskCount>할 일 :{doneCount}/{totalCount}</TeskCount>
            <StatusBar percent = {percent}>
                <p>{percent}%</p>
            </StatusBar>
    </Block>
)
}
)

const Block = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 20px 10px;
    height: 100px;
`

const DateText = styled.p`
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 10px;
`

const TeskCount = styled.span`
    color: #4a4a4a;
    font-size:0.9em;
    font-weight: 400;

`

const StatusBar = styled.div`
    width:100vw;
    padding:2px 0;
    background-color: #ddd;
    font-size:0.7em;
    text-align:center;
    color:#fff;
    border-radius : 10px;
    margin-top: 10px;
    position: absolute;
    overflow: hidden;
    &::before{
        content:"";
        display:block;
        width: 100%;
        height: 100%;
        transition : transform 0.25s;
        transform: scaleX(${({percent}) => percent}%);
        background-color: #000;
        position:absolute;
        transform-origin: left;
    }
    p{
        position: relative;
        z-index: 100;
    }
`