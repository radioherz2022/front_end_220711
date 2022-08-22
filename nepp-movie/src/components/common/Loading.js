import styled, { keyframes } from "styled-components";

export default function Loading(){
    return (
    <Block> 
        <LoadingCircle/>
    </Block>
    )
}

const rotate = keyframes`
    to{
        transform: rotate(360deg);
    }
`

const Block = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const LoadingCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border:5px solid #fff;
    border-right:5px solid #000;
    transform: rotate(90deg);
    animation:${rotate} 1s infinite;
`