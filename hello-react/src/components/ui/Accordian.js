import { useState } from "react";
import styled, { css } from "styled-components"
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai"

export default function Accordian(){
    const [active, setActive] = useState(false);
    return ( 
    <Block active={active}>   
        <TitleBox>
        <h3>제목</h3>
        {/* { active ? 
            (<span onClick={() => setActive(false)}>닫기</span>)
            :
            (<span onClick={() => setActive(true)}>보기</span>)
            // 삼항 연산자를 통해 active ? (true):(false)
        } */}
        <span onClick={() => setActive(!active)}>
            {/*active ? "닫기" : "보기"*/}
           {active ? <AiFillCaretUp/>:<AiFillCaretDown color="#2596be" size={22}/>} </span>
        </TitleBox>

        <p>Somewhere over the rainbow
            Bluebirds fly
            And the dreams that you dream of
            Dreams really do come true-ooh-ooh
            Someday I'll wish upon a star
            Wake up where the clouds are far behind me
            Dreams really do come true-ooh-ooh
            Someday I'll wish upon a star
            Wake up where the clouds are far behind me
        </p>
        </Block>
        )
}

const Block = styled.div`
padding:10px;
background-color: #f2f2f2;
margin-bottom: 10px;
border-radius: 4px;
h3{
    padding: 10px 0;
}

p{
    max-height: 0;
    overflow: hidden;
    transition: 0.25s;
    // p내용이 가려지는 방식은 display:none;이 있지만 transition효과를 활용할 수 없음
}
${({active}) => active && css`
    // active가 true일 때를 나타냄 active && css
    // $ 자바스크립트 함수를 가지고 올 때 사용하는 형식
    p{
        overflow-y: scroll;
        max-height: 150px;
        // height:auto일때는 transition이 적용되지 않는다.
        // max-height를 이용해 수치를 이용하면 transition적용 가능하고, 각 텍스트 길이만큼 여백 적용
    }
    ${TitleBox}{
        span{
            transform: rotate(180deg);
        }
    }
`}

`;


const TitleBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
span{
    cursor: pointer;
    user-select: none;
    transition:0.25s;
}
`